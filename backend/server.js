const express = require('express');
const cors = require('cors');
const path = require('path');
const pool = require('./db');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const fs = require('fs');
const crypto = require('crypto');
const { spawn } = require('child_process');
const { spawnSync } = require('child_process');
const privateKeyPath = path.join(__dirname, 'private.pem');
const publicKeyPath = path.join(__dirname, 'public.pem');
const publicKey = fs.readFileSync(publicKeyPath, "utf8");
const privateKey = fs.readFileSync(privateKeyPath, "utf8");




if (!fs.existsSync(privateKeyPath) || !fs.existsSync(publicKeyPath)) {
    console.log('RSA key pair not found. Generating new keys...');
    // Run your Python script synchronously to generate the key pair
    const result = spawnSync('python', [path.join(__dirname, 'RSAkeypairs.py')]);
    if (result.status !== 0) {
        console.error('Error generating RSA key pair:', result.stderr.toString());
        process.exit(1); // Stop backend if key generation fails
    } else {
        console.log('RSA key pair successfully generated.');
    }
} else {
    console.log('RSA key pair found. Using existing keys.');
}


const app = express();
app.use(cors());
app.use(express.json());

// For profile image storage
const profileDir = path.join(__dirname, 'profile_images');
if (!fs.existsSync(profileDir)) fs.mkdirSync(profileDir);
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, profileDir),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });
app.use('/profile_images', express.static(profileDir));

app.get('/api/public-key', (req, res) => {
    try {
        const publicKey = fs.readFileSync(publicKeyPath, "utf8");
        res.type('text/plain').send(publicKey);
    } catch (err) {
        res.status(500).json({ error: 'Could not read public key.' });
    }
});


// Registration endpoint with Python bcrypt
app.post('/api/register', upload.single('profileImage'), async (req, res) => {
    console.log('req.file', req.file); // <--- see if file is received as profileImage

    const { username, password } = req.body;
    if (!(username && password)) return res.status(400).json({ error: 'Required fields missing' });

    console.log('Running Python bcrypt hash');


    // Call the Python script to generate bcrypt hash
    const pyScript = path.join(__dirname, 'bcrypthash.py');
    const py = spawn('python', [pyScript, password]);

    let hash = '';
    py.stdout.on('data', (data) => {
        hash += data.toString();
    });

    py.stderr.on('data', (data) => {
        console.error('Python error:', data.toString());
    });

    py.on('close', async (code) => {
        if (code !== 0) {
            return res.status(500).json({ error: 'Python bcrypt failed.' });
        }
        try {
            const imgPath = req.file ? `/profile_images/${req.file.filename}` : null;
            const result = await pool.query(
                'INSERT INTO users (username, password_hash, profile_image) VALUES ($1, $2, $3) RETURNING id, username, profile_image',
                [username, hash.trim(), imgPath]
            );
            res.status(201).json(result.rows[0]);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
});



// Login endpoint with Python bcrypt verification
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    if (!(username && password)) return res.status(400).json({ error: 'Required fields missing' });
    try {
        const result = await pool.query('SELECT * FROM users WHERE username=$1', [username]);
        const user = result.rows[0];
        if (!user) return res.status(401).json({ error: 'No user found' });

        console.log('Running Python bcrypt verify');


        // Call Python script for bcrypt verification
        const pyScript = path.join(__dirname, 'bcryptverify.py');
        const py = spawn('python', [pyScript, password, user.password_hash]);

        let output = '';
        // Collect output from Python script to check hash validity
        py.stdout.on('data', (data) => {
            output += data.toString();
        });

        py.stderr.on('data', (data) => {
            console.error('Python error:', data.toString());
        });

        // When Python script ends, check if password is valid
        py.on('close', (code) => {
            if (code !== 0) {
                return res.status(500).json({ error: 'Python bcrypt verification failed' });
            }
            if (output.trim() === "valid") {
                // Login success
                res.json({ id: user.id, username: user.username, profile_image: user.profile_image });
            } else {
                // Wrong password
                res.status(401).json({ error: 'Wrong password' });
            }
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Get profile info by username
app.get('/api/profile/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const result = await pool.query('SELECT username, profile_image FROM users WHERE username=$1', [username]);
        if (!result.rowCount) return res.status(404).json({ error: 'User not found' });
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



app.post('/api/encrypt-file', async (req, res) => {
    const { username, filename, filetype, content } = req.body;
    if (!username || !filename || !filetype || !content) return res.status(400).json({ error: 'Missing data' });
    try {
        const userRes = await pool.query('SELECT id FROM users WHERE username = $1', [username]);
        if (!userRes.rowCount) return res.status(404).json({ error: 'User not found.' });
        const user_id = userRes.rows[0].id;
        // Call python for hybrid AES+RSA encryption:
        const pyres = spawnSync('python', ['hybrid_crypto.py', 'encrypt', publicKeyPath, content], { encoding: 'utf8' });
        if (pyres.status !== 0) return res.status(500).json({ error: 'Hybrid encryption failed' });
        const [encrypted_content, wrapped_key, iv, sha256_hash] = pyres.stdout.trim().split('\n');

        const result = await pool.query(
            'INSERT INTO encrypted_files (user_id, filename, filetype, encrypted_content, wrapped_key, iv, sha256_hash) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [user_id, filename, filetype, encrypted_content, wrapped_key, iv, sha256_hash]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/decrypt-file', async (req, res) => {
    const { username, fileId, password } = req.body;
    if (!username || !fileId || !password) return res.status(400).json({ error: 'Missing data' });
    try {
        const userRes = await pool.query('SELECT * FROM users WHERE username = $1', [username]);


        if (!userRes.rowCount) return res.status(404).json({ error: 'User not found.' });

        const user = userRes.rows[0];

        console.log("Checking password for", username);
        console.log("Using hash for bcrypt check:", user.password_hash);

        const pyScript = path.join(__dirname, 'bcryptverify.py');
        const py = spawnSync('python', [pyScript, password, user.password_hash], { encoding: 'utf8' });

        console.log("Bcrypt verify Python output:", py.stdout, py.stderr);
        if (py.status !== 0 || py.stdout.trim() !== 'valid') {
            console.log("Wrong password or bcrypt verify failed.", { password, status: py.status, output: py.stdout });
            return res.status(401).json({ error: 'Wrong password' });
        }
        const user_id = userRes.rows[0].id;


        const fileRes = await pool.query('SELECT * FROM encrypted_files WHERE id = $1 AND user_id = $2', [fileId, user_id]);
        if (!fileRes.rowCount) {
            console.log("File not found for given id/user:", fileId, user.id);
            return res.status(404).json({ error: 'File not found.' });
        }
        const file = fileRes.rows[0];
        // Call python for hybrid AES+RSA decryption:
        const pyres = spawnSync(
            'python',
            [
                'hybrid_crypto.py',
                'decrypt',
                privateKeyPath,
                file.encrypted_content,
                file.wrapped_key,
                file.iv
            ],
            { encoding: 'utf8' }
        );

        console.log("hybrid_crypto decrypt output:", pyres.stdout, pyres.stderr);

        console.log('Decrypting file. Args:', {
            encrypted_content: file.encrypted_content,
            wrapped_key: file.wrapped_key,
            iv: file.iv
        });
        console.log("hybrid_crypto decrypt output:", pyres.stdout);
        console.log("hybrid_crypto decrypt ERR:", pyres.stderr);
        if (pyres.status !== 0) {
            console.log("Hybrid decryption failed (status not 0):", pyres.stderr);
            return res.status(500).json({ error: 'Hybrid decryption failed' });
        }
        res.json({
            filename: file.filename,
            filetype: file.filetype,
            content: pyres.stdout.trim(),
            sha256_hash: file.sha256_hash
        });



    } catch (err) {
        console.log("Exception in decrypt:", err);
        res.status(500).json({ error: err.message });
    }
});



// Get all files for a user
app.get('/api/encrypted-files/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const userRes = await pool.query('SELECT id FROM users WHERE username = $1', [username]);
        if (!userRes.rowCount) return res.status(404).json({ error: 'User not found.' });
        const user_id = userRes.rows[0].id;
        // const result = await pool.query(
        //     'SELECT id, filename, filetype, encrypted_at FROM encrypted_files WHERE user_id = $1 ORDER BY encrypted_at DESC',
        //     [user_id]
        // );

        const result = await pool.query('SELECT id, filename, filetype, encrypted_at, sha256_hash FROM encrypted_files WHERE user_id = $1 ORDER BY encrypted_at DESC',
            [user_id]
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Directory for storing encrypted media temp files (optional, for file handling)
const mediaUploads = path.join(__dirname, 'media_uploads');
if (!fs.existsSync(mediaUploads)) {
    fs.mkdirSync(mediaUploads);
}
const uploadMedia = multer({ dest: mediaUploads });

// Encrypt media (images/videos)
app.post('/api/encrypt-media', uploadMedia.single('file'), async (req, res) => {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];

    const { username } = req.body;
    if (!username || !req.file) return res.status(400).json({ error: 'Required fields missing' });
    try {
        // Get user id
        const userRes = await pool.query('SELECT id FROM users WHERE username = $1', [username]);
        if (!userRes.rowCount) return res.status(404).json({ error: 'User not found.' });
        const user_id = userRes.rows[0].id;

        // Read file content in binary and base64 encode for storage

        const fileBuffer = fs.readFileSync(req.file.path);



        if (!allowedMimeTypes.includes(req.file.mimetype)) {
            fs.unlinkSync(req.file.path);
            return res.status(400).json({ error: 'Type not allowed' });
        }

        if (fileBuffer.length > 5 * 1024 * 1024) { // 5MB limit
            fs.unlinkSync(req.file.path);
            return res.status(400).json({ error: 'File too large' });
        }
        const filename = req.file.originalname;
        const filetype = req.file.mimetype;

        const contentBase64 = fileBuffer.toString('base64');
        //
        const pyres = spawnSync('python', ['hybrid_crypto.py', 'encrypt', publicKeyPath, contentBase64], { encoding: 'utf8' });
        if (pyres.status !== 0) return res.status(500).json({ error: 'Hybrid encryption failed' });


        const [encrypted, wrappedKey, iv, sha256_hash] = pyres.stdout.trim().split('\n');
        const result = await pool.query(
            'INSERT INTO encrypted_files (user_id, filename, filetype, encrypted_content, wrapped_key, iv, sha256_hash) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [user_id, filename, filetype, encrypted, wrappedKey, iv, sha256_hash]
        );
        // Cleanup uploaded file
        fs.unlinkSync(req.file.path);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Encryption Failed:' + err.message });
    }
});


app.listen(5000, () => console.log('✅ Server running on http://localhost:5000'));