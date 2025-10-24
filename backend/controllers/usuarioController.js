// backend/controllers/usuarioController.js
const Usuario = require("../models/usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

module.exports = {
  // Registrar usuario (create)
  async register(req, res) {
    try {
      const {
        usuario_primer_nombre,
        usuario_segundo_nombre,
        usuario_primer_apellido,
        usuario_segundo_apellido,
        usuario_documento,
        usuario_correo,
        usuario_direccion,
        usuario_credencial,
      } = req.body;

      if (
        !usuario_primer_nombre ||
        !usuario_primer_apellido ||
        !usuario_documento ||
        !usuario_correo ||
        !usuario_credencial
      ) {
        return res.status(400).json({ message: "Faltan datos obligatorios" });
      }

      // verificar si correo ya existe
      const existing = await Usuario.findByEmail(usuario_correo);
      if (existing) {
        return res
          .status(409)
          .json({ message: "El correo ya está registrado" });
      }

      // hashear contraseña
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(usuario_credencial, salt);

      const newUser = {
        usuario_primer_nombre,
        usuario_segundo_nombre: usuario_segundo_nombre || "",
        usuario_primer_apellido,
        usuario_segundo_apellido: usuario_segundo_apellido || "",
        usuario_documento,
        usuario_correo,
        usuario_direccion: usuario_direccion || "",
        usuario_credencial: hashed,
      };

      const insertedId = await Usuario.createUsuario(newUser);

      return res
        .status(201)
        .json({ message: "Usuario creado", usuario_id: insertedId });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error del servidor" });
    }
  },

  // Login -> devuelve token
  async login(req, res) {
    try {
      const { usuario_correo, usuario_credencial } = req.body;
      if (!usuario_correo || !usuario_credencial) {
        return res.status(400).json({ message: "Faltan credenciales" });
      }

      const user = await Usuario.findByEmail(usuario_correo);
      if (!user) {
        console.log("❌ No se encontró usuario con correo:", usuario_correo);
        return res
          .status(401)
          .json({ message: "Credenciales inválidas (usuario no encontrado)" });
      }

      // 🔍 Debug temporal para ver qué datos se están comparando
      console.log("✅ Usuario encontrado:", user.usuario_correo);
      console.log("🔹 Contraseña enviada:", usuario_credencial);
      console.log("🔹 Hash en base de datos:", user.usuario_credencial);

      const isMatch = await bcrypt.compare(
        usuario_credencial,
        user.usuario_credencial
      );
      console.log("🔍 Resultado bcrypt.compare:", isMatch);

      if (!isMatch) {
        return res
          .status(401)
          .json({ message: "Credenciales inválidas (contraseña incorrecta)" });
      }

      const payload = {
        usuario_id: user.usuario_id,
        usuario_correo: user.usuario_correo,
      };
      const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
      });

      return res.json({ message: "Autenticado", token });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error del servidor" });
    }
  },

  // obtener todos (protegido)
  async getAll(req, res) {
    try {
      const rows = await Usuario.findAll();
      return res.json(rows);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error del servidor" });
    }
  },

  // obtener por id (protegido)
  async getById(req, res) {
    try {
      const { id } = req.params;
      const user = await Usuario.findById(id);
      if (!user)
        return res.status(404).json({ message: "Usuario no encontrado" });
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error del servidor" });
    }
  },

  // actualizar usuario (protegido)
  async update(req, res) {
    try {
      const { id } = req.params;
      const updated = await Usuario.updateUsuario(id, req.body);
      if (!updated)
        return res
          .status(404)
          .json({ message: "Usuario no encontrado o sin cambios" });
      return res.json({ message: "Usuario actualizado" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error del servidor" });
    }
  },

  // eliminar usuario (protegido)
  async remove(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Usuario.deleteUsuario(id);
      if (!deleted)
        return res.status(404).json({ message: "Usuario no encontrado" });
      return res.json({ message: "Usuario eliminado" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error del servidor" });
    }
  },

  // cambiar contraseña (protegido)
  async changePassword(req, res) {
    try {
      const { id } = req.params;
      const { newPassword } = req.body;
      if (!newPassword)
        return res.status(400).json({ message: "Nueva contraseña requerida" });

      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(newPassword, salt);

      const updated = await Usuario.updatePassword(id, hashed);
      if (!updated)
        return res.status(404).json({ message: "Usuario no encontrado" });

      return res.json({ message: "Contraseña actualizada" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error del servidor" });
    }
  },
};
