import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST ?? '127.0.0.1',
    port: Number(process.env.DB_PORT ?? 3307),
    user: process.env.DB_USER ?? 'ucodrr',
    password: process.env.DB_PASSWORD ?? 'secret',
    database: process.env.DB_NAME ?? 'codrr_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default pool;