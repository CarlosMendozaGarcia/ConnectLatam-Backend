require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config');
const noticiaRoutes = require('./routes/noticiaRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Rutas
app.use('/news', noticiaRoutes);

// Servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
