const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


const cors = require('cors');
app.use(cors({
  origin: '*', 
}));

// importa rutas
const rutas = require('./routes/routes');
app.use('/api', rutas);



app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));