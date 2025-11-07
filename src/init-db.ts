import pool from './config/db';

async function createTables() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log('✅ Tabla "usuarios" creada o ya existente.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al crear la tabla:', error);
    process.exit(1);
  }
}

createTables();