const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',         // your host, stay with localhost unless remote
    user: 'postgres',         // your DB user
    password: 'gn1234',       // your password
    database: 'cryptoapp',    // your database name
    port: 5432,               // default PostgreSQL port

});

// Optional: Error handler for pool
pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = pool;
