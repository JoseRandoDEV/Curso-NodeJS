import express from 'express';
import dotenv from 'dotenv';
import usuariosRouter from './routes/usuarios';

dotenv.config();

const app = express();
app.use(express.json()); // permite leer JSON del body

// Rutas
app.use('/usuarios', usuariosRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

