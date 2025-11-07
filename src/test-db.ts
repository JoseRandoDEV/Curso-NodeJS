import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function testConnection() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST ?? 'localhost',
      port: Number(process.env.DB_PORT ?? 3306),
      user: process.env.DB_USER ?? 'root',
      password: process.env.DB_PASSWORD ?? '',
      database: process.env.DB_NAME ?? '',
    });

    console.log('✅ Conexión exitosa a la base de datos');
    const [rows] = await connection.query('SELECT NOW() AS now');
    console.log('📅 Fecha y hora del servidor MySQL:', rows);
    await connection.end();
  } catch (error: any) {
    console.error('❌ Error al conectar a la base de datos:', error.message);
  }
}

testConnection();
