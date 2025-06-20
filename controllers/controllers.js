let tareas = [
  { id: 1, nombre: 'Estudiar' },
  { id: 2, nombre: 'Hacer la api' },
  { id: 3, nombre: 'Hacer el front' },
  { id: 4, nombre: 'Desplegar la app' },
  { id: 5, nombre: 'Descansar' },
  { id: 6, nombre: 'Revisar el código' },
  { id: 7, nombre: 'Preparar la presentación' },
  { id: 8, nombre: 'Enviar el informe' },
  { id: 9, nombre: 'Reunión con el equipo' },
  { id: 10, nombre: 'Planificar la próxima semana' }
];

// Obtener todas las tareas
function getTareas(req, res) {
  res.json(tareas);
}

// Obtener una tarea por id
function getTareaById(req, res) {
  const tarea = tareas.find(t => t.id === parseInt(req.params.id));
  if (!tarea) return res.status(404).json({ mensaje: 'No encontrada' });
  res.json(tarea);
}

// Crear una nueva tarea
function createTarea(req, res) {
  if (!req.body.nombre) {
    return res.status(400).json({ mensaje: 'El nombre es obligatorio' });
  }
  if (tareas.some(t => t.nombre.toLowerCase() === req.body.nombre.toLowerCase())) {
    return res.status(400).json({ mensaje: 'Ya existe una tarea con ese nombre' });
  }
  const nueva = {
    id: tareas.length ? Math.max(...tareas.map(t => t.id)) + 1 : 1,
    nombre: req.body.nombre
  };
  tareas.push(nueva);
  res.status(201).json(nueva);
}
// Actualizar una tarea existente
function updateTarea(req, res) {
  const tarea = tareas.find(t => t.id === parseInt(req.params.id));
  if (!tarea) return res.status(404).json({ mensaje: 'No encontrada' });
  if (!req.body.nombre) {
    return res.status(400).json({ mensaje: 'El nombre es obligatorio' });
  }
  tarea.nombre = req.body.nombre;
  res.json(tarea);
}

function deleteTarea(req, res) {
  const id = parseInt(req.params.id);
  const index = tareas.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).json({ mensaje: 'No encontrada' });
  }
  tareas.splice(index, 1);

  // Reasigna los IDs para que sean consecutivos
  tareas.forEach((tarea, idx) => {
    tarea.id = idx + 1;
  });

  res.json({ mensaje: 'Tarea eliminada' });
}

// Marcar una tarea como completada o pendiente
function marcarCompletada(req, res) {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);
  if (!tarea) return res.status(404).json({ mensaje: 'No encontrada' });
  tarea.completada = !tarea.completada;
  res.json(tarea);
}

//filtros para tareas completadas y pendientes
function tareasCompletadas(req, res) {
  res.json(tareas.filter(t => t.completada));
}
function tareasPendientes(req, res) {
  res.json(tareas.filter(t => !t.completada));
}

// Obtener la primera tarea
function ultimaTarea(req, res) {
  if (tareas.length === 0) return res.status(404).json({ mensaje: 'No hay tareas' });
  res.json(tareas[tareas.length - 1]);
}

// Obtener tareas por rango de IDs
function tareasPorRango(req, res) {
  const desde = parseInt(req.query.desde) || 1;
  const hasta = parseInt(req.query.hasta) || tareas.length;
  res.json(tareas.filter(t => t.id >= desde && t.id <= hasta));
}
// ...existing code...
module.exports = {
  getTareas,
  getTareaById,
  createTarea,
  updateTarea,
  deleteTarea,
  marcarCompletada,
  tareasCompletadas,
  tareasPendientes,
  ultimaTarea,
  tareasPorRango
};