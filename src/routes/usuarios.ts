import express, { Request, Response } from 'express';
import pool from '../config/db';

const router = express.Router();

// POST → crear un usuario
router.post('/', async (req: Request, res: Response) => {
  try {
    const { nombre, email } = req.body;

    if (!nombre || !email) {
      return res.status(400).json({ error: 'Nombre y email son obligatorios' });
    }

    const [result] = await pool.query(
      'INSERT INTO usuarios (nombre, email) VALUES (?, ?)',
      [nombre, email]
    );

    res.status(201).json({ mensaje: 'Usuario agregado correctamente', result });
  } catch (error) {
    console.error('❌ Error al insertar usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;
