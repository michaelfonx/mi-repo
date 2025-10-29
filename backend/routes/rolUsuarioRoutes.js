const express = require('express');
const router = express.Router();
const rolUsuarioController = require('../controllers/rolUsuarioController');
const auth = require('../middlewares/authMiddleware');

// Asignar un rol a usuario
router.post('/asignar', auth, rolUsuarioController.assign);

// Listar todas las asignaciones
router.get('/all', auth, rolUsuarioController.getAll);

// Ver roles de un usuario específico
router.get('/usuario/:usuario_id', auth, rolUsuarioController.getByUsuario);

// Actualizar estado (activar/desactivar)
router.put('/estado/:id', auth, rolUsuarioController.updateEstado);

// Eliminar asignación
router.delete('/delete/:id', auth, rolUsuarioController.remove);

module.exports = router;
