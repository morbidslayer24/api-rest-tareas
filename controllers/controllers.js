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

// Eliminar una tarea
function deleteTarea(req, res) {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);
  if (!tarea) {
    return res.status(404).json({ mensaje: 'No encontrada' });
  }
  tareas = tareas.filter(t => t.id !== id);
  res.json({ mensaje: 'Tarea eliminada' });
}

module.exports = {
  getTareas,
  getTareaById,
  createTarea,
  updateTarea,
  deleteTarea
};