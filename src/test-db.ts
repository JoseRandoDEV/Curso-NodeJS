import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

async function testConnection() {
  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'nodeuser',
      password: process.env.DB_PASSWORD || '52723751',
      database: process.env.DB_NAME || 'codrr_db',
      port: Number(process.env.DB_PORT) || 3307,
    });
    console.log("✅ Conexión exitosa a la base de datos!");
    await conn.end();
  } catch (error) {
    console.error("❌ Error al conectar:", error);
  }
}

testConnection();
