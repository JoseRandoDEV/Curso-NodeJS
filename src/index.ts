import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './data-source';
import { UserEntity } from './user/entities/user.entity';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public')); // 👉 sirve index.html desde /public

// Conexión a la base de datos
AppDataSource.initialize()
  .then(async () => {
    console.log('✅ Conectado a la base de datos y entidades sincronizadas.');

    const userRepo = AppDataSource.getRepository(UserEntity);

    // ✅ GET: obtener todos los usuarios
    app.get('/users', async (req, res) => {
      try {
        const users = await userRepo.find();
        res.json(users);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener usuarios' });
      }
    });

    // ✅ GET: obtener usuario por ID
    app.get('/users/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const user = await userRepo.findOneBy({ id });

        if (!user) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json(user);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener usuario por ID' });
      }
    });


    // ✅ POST: crear nuevo usuario
    app.post('/users', async (req, res) => {
      try {
        const { name, lastName, username, email, password, city, province } = req.body;

        if (!name || !lastName || !username || !email || !password) {
          return res.status(400).json({ message: 'Faltan campos obligatorios' });
        }

        const newUser = userRepo.create({
          name,
          lastName,
          username,
          email,
          password,
          city,
          province,
        });

        await userRepo.save(newUser);
        res.status(201).json(newUser);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear usuario' });
      }
    });

    // ✅ DELETE: eliminar usuario por ID
    app.delete('/users/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const user = await userRepo.findOneBy({ id });

        if (!user) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        await userRepo.remove(user);
        res.json({ message: 'Usuario eliminado correctamente' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar usuario' });
      }
    });

    // ✅ Servir el index.html al ingresar a la raíz
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // 🚀 Iniciar servidor
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });

  })
  .catch((error) => console.error('❌ Error al conectar con la base de datos:', error));

// npx ts-node src/index.ts
