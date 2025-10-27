// backend/routes/rolRoutes.js
const express = require("express");
const router = express.Router();
const rolController = require("../controllers/rolController");
const auth = require('../middlewares/authMiddleware');
 // ✅ ruta correcta

// Crear un nuevo rol
router.post("/rolCreate", auth, rolController.create);

// Obtener todos los roles
router.get("/rolesAll", auth, rolController.getAll);

// Obtener un rol por ID
router.get("/rolById/:id", auth, rolController.getById);

// Actualizar un rol
router.put("/rolUpdate/:id", auth, rolController.update);

// Eliminar un rol
router.delete("/rolDelete/:id", auth, rolController.remove);

module.exports = router;
