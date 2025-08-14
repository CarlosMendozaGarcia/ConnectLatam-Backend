const mongoose = require('mongoose');

const noticiaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'El título es obligatorio'],
    trim: true
  },
  resume: {
    type: String,
    required: [true, 'El resumen es obligatorio'],
    trim: true
  },
  img: {
    type: Buffer, // Para guardar un archivo binario (blob)
  }
}, {
  timestamps: true // Crea campos createdAt y updatedAt
});

module.exports = mongoose.model('Noticia', noticiaSchema);