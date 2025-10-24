// backend/routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');
const authenticateToken = require('../middlewares/authMiddleware');

// Rutas públicas
router.get('/raiz', (req, res) => {
  res.json({ message: 'API Usuarios funcionando correctamente' });
});

router.post('/userCreate', UsuarioController.register);
router.post('/login', UsuarioController.login);

// Rutas protegidas
router.get('/usersAll', authenticateToken, UsuarioController.getAll);
router.get('/userById/:id', authenticateToken, UsuarioController.getById);
router.put('/userUpdate/:id', authenticateToken, UsuarioController.update);
router.delete('/userDelete/:id', authenticateToken, UsuarioController.remove);

module.exports = router;

