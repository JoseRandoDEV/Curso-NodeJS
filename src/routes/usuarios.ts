import { Router } from 'express';
import db from '../config/db';

const router = Router();

/* ============================
   🔹 Obtener todos los usuarios
=============================== */
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    console.error('❌ Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

/* ============================
   🔹 Obtener un usuario por ID
=============================== */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows]: any = await db.query('SELECT * FROM usuarios WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error('❌ Error al obtener usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

/* ============================
   🔹 Crear nuevo usuario
=============================== */
router.post('/', async (req, res) => {
  try {
    const { nombre, email } = req.body;

    if (!nombre || !email) {
      return res.status(400).json({ error: 'Faltan datos' });
    }

    const [result]: any = await db.query(
      'INSERT INTO usuarios (nombre, email) VALUES (?, ?)',
      [nombre, email]
    );

    res.status(201).json({ id: result.insertId, nombre, email });
  } catch (error) {
    console.error('❌ Error al crear usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

/* ============================
   🔹 Actualizar usuario
=============================== */
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email } = req.body;

    const [result]: any = await db.query(
      'UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?',
      [nombre, email, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({ id, nombre, email });
  } catch (error) {
    console.error('❌ Error al actualizar usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

/* ============================
   🔹 Eliminar usuario
=============================== */
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result]: any = await db.query('DELETE FROM usuarios WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error('❌ Error al eliminar usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;
