const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/controllers');

router.get('/tareas', tareasController.getTareas);
router.get('/tareas/:id', tareasController.getTareaById);
router.post('/tareas', tareasController.createTarea);
router.put('/tareas/:id', tareasController.updateTarea);
router.delete('/tareas/:id', tareasController.deleteTarea);

module.exports = router;