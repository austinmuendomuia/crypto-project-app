// const express = require('express');
// const pool = require('./db');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Test DB connection on startup
// pool.connect((err, client, release) => {
//     if (err) {
//         return console.error('Error acquiring client', err.stack);
//     }
//     client.query('SELECT NOW()', (err, result) => {
//         release();
//         if (err) {
//             return console.error('Error executing query', err.stack);
//         }
//         console.log('Database connected:', result.rows[0].now);
//     });
// });

// // (Add your REST API endpoints here)

// app.listen(5000, () => console.log('✅ Server running on http://localhost:5000'));


const express = require('express');
const cors = require('cors');
const path = require('path');
const pool = require('./db');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const fs = require('fs');
const crypto = require('crypto');


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

// Registration endpoint
app.post('/api/register', upload.single('profileImage'), async (req, res) => {
    //console.log('req.body', req.body); // <--- see the parsed text (should show username/password)
    console.log('req.file', req.file); // <--- see if file is received as profileImage

    const { username, password } = req.body;
    if (!(username && password)) return res.status(400).json({ error: 'Required fields missing' });
    try {
        // Check for existing user
        const check = await pool.query('SELECT 1 FROM users WHERE username=$1', [username]);
        if (check.rowCount) return res.status(409).json({ error: 'Username already exists' });
        // Hash password using bcrypt and store user
        const hash = await bcrypt.hash(password, 10);
        const imgPath = req.file ? `/profile_images/${req.file.filename}` : null;
        const result = await pool.query(
            'INSERT INTO users (username, password_hash, profile_image) VALUES ($1, $2, $3) RETURNING id, username, profile_image',
            [username, hash, imgPath]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    if (!(username && password)) return res.status(400).json({ error: 'Required fields missing' });
    try {
        const result = await pool.query('SELECT * FROM users WHERE username=$1', [username]);
        const user = result.rows[0];
        if (!user) return res.status(401).json({ error: 'No user found' });
        //Compare user input password with hashed password stored in database
        const valid = await bcrypt.compare(password, user.password_hash);
        if (!valid) return res.status(401).json({ error: 'Wrong password' });
        res.json({ id: user.id, username: user.username, profile_image: user.profile_image });
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

// Simple AES demo encryption/decryption for files(edit this so the info is taken from the DB) this is jus to test.
function encryptText(text, key = 'mysecretkey12345') {
    const cipher = crypto.createCipheriv('aes-128-cbc', key.slice(0, 16), Buffer.alloc(16));
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}
function decryptText(encrypted, key = 'mysecretkey12345') {
    const decipher = crypto.createDecipheriv('aes-128-cbc', key.slice(0, 16), Buffer.alloc(16));
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Encrypt file/text and store
app.post('/api/encrypt-file', async (req, res) => {
    const { username, filename, filetype, content } = req.body;
    if (!username || !filename || !filetype || !content) return res.status(400).json({ error: 'Missing data' });
    try {
        const userRes = await pool.query('SELECT id FROM users WHERE username = $1', [username]);
        if (!userRes.rowCount) return res.status(404).json({ error: 'User not found.' });
        const user_id = userRes.rows[0].id;
        const encrypted_content = encryptText(content);
        const result = await pool.query(
            'INSERT INTO encrypted_files (user_id, filename, filetype, encrypted_content) VALUES ($1, $2, $3, $4) RETURNING *',
            [user_id, filename, filetype, encrypted_content]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
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
        const result = await pool.query(
            'SELECT id, filename, filetype, encrypted_at FROM encrypted_files WHERE user_id = $1 ORDER BY encrypted_at DESC',
            [user_id]
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Decrypt file by id
app.post('/api/decrypt-file', async (req, res) => {
    const { username, fileId } = req.body;
    if (!username || !fileId) return res.status(400).json({ error: 'Missing data' });
    try {
        const userRes = await pool.query('SELECT id FROM users WHERE username = $1', [username]);
        if (!userRes.rowCount) return res.status(404).json({ error: 'User not found.' });
        const user_id = userRes.rows[0].id;
        const fileRes = await pool.query('SELECT * FROM encrypted_files WHERE id = $1 AND user_id = $2', [fileId, user_id]);
        if (!fileRes.rowCount) return res.status(404).json({ error: 'File not found.' });
        const file = fileRes.rows[0];
        const decrypted_content = decryptText(file.encrypted_content);
        res.json({ filename: file.filename, filetype: file.filetype, content: decrypted_content });
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
    const { username } = req.body;
    if (!username || !req.file) return res.status(400).json({ error: 'Required fields missing' });
    try {
        // Get user id
        const userRes = await pool.query('SELECT id FROM users WHERE username = $1', [username]);
        if (!userRes.rowCount) return res.status(404).json({ error: 'User not found.' });
        const user_id = userRes.rows[0].id;
        // Read file content in binary and base64 encode for storage
        const fileBuffer = fs.readFileSync(req.file.path);
        const contentBase64 = fileBuffer.toString('base64');
        const encrypted_content = encryptText(contentBase64); // still AES for demo
        const filename = req.file.originalname;
        const filetype = req.file.mimetype;
        const result = await pool.query(
            'INSERT INTO encrypted_files (user_id, filename, filetype, encrypted_content) VALUES ($1, $2, $3, $4) RETURNING *',
            [user_id, filename, filetype, encrypted_content]
        );
        // Cleanup uploaded file
        fs.unlinkSync(req.file.path);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Encryption Failed:' + err.message });
    }
});

// Test DB connection on startup
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    client.query('SELECT NOW()', (err, result) => {
        release();
        if (err) {
            return console.error('Error executing query', err.stack);
        }
        console.log('Database connected:', result.rows[0].now);
    });
});


app.listen(5000, () => console.log('✅ Server running on http://localhost:5000'));
