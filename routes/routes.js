const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/controllers');

router.get('/tareas', tareasController.getTareas);
router.get('/tareas/:id', tareasController.getTareaById);
router.post('/tareas', tareasController.createTarea);
router.put('/tareas/:id', tareasController.updateTarea);
router.delete('/tareas/:id', tareasController.deleteTarea);
router.patch('/tareas/:id/completar', tareasController.marcarCompletada);
router.get('/tareas-completadas', tareasController.tareasCompletadas);
router.get('/tareas-pendientes', tareasController.tareasPendientes);
router.get('/tarea-ultima', tareasController.ultimaTarea);
router.get('/tareas-rango', tareasController.tareasPorRango);

module.exports = router;