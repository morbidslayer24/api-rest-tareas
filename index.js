const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// importa rutas
const rutas = require('./routes/routes');
app.use('/api', rutas);

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('API REST de tareas funcionando. Visita /api/tareas');
});

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));