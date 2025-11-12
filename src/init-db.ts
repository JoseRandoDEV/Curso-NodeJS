import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function initDB() {
  try {
    // Conectamos sin especificar base de datos (por si no existe)
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST ?? '127.0.0.1',
      user: process.env.DB_USER ?? 'nodeuser',
      password: process.env.DB_PASSWORD ?? '52723751',
    });

    const dbName = process.env.DB_NAME ?? 'codrr_db';

    // Crear base de datos si no existe
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
    console.log(`✅ Base de datos "${dbName}" verificada o creada.`);

    // Conectamos a la base de datos recién creada
    await connection.changeUser({ database: dbName });

    // Crear tabla usuarios si no existe
    await connection.query(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('✅ Tabla "usuarios" verificada o creada correctamente.');

    await connection.end();
    console.log('🎉 Base de datos inicializada con éxito.');
  } catch (err) {
    console.error('❌ Error al inicializar la base de datos:', err);
  }
}

initDB();
