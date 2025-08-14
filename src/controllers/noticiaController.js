const Noticia = require('../models/Noticia');

// Crear una noticia
exports.createNoticia = async (req, res) => {
  try {
    const { title, resume } = req.body;
    const img = req.file ? req.file.buffer : null; // Si usas multer para subir la imagen

    const noticia = new Noticia({ title, resume, img });
    await noticia.save();

    res.status(201).json({ message: 'Noticia creada con éxito', noticia });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las noticias
exports.getNoticias = async (req, res) => {
  try {
    const noticias = await Noticia.find().sort({ createdAt: -1 });
    res.json(noticias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una noticia por ID
exports.getNoticiaById = async (req, res) => {
  try {
    const noticia = await Noticia.findById(req.params.id);
    if (!noticia) return res.status(404).json({ message: 'Noticia no encontrada' });
    res.json(noticia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una noticia
exports.updateNoticia = async (req, res) => {
  try {
    const { title, resume } = req.body;
    const img = req.file ? req.file.buffer : undefined;

    const noticia = await Noticia.findByIdAndUpdate(
      req.params.id,
      { title, resume, ...(img && { img }) },
      { new: true, runValidators: true }
    );

    if (!noticia) return res.status(404).json({ message: 'Noticia no encontrada' });
    res.json({ message: 'Noticia actualizada', noticia });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar una noticia
exports.deleteNoticia = async (req, res) => {
  try {
    const noticia = await Noticia.findByIdAndDelete(req.params.id);
    if (!noticia) return res.status(404).json({ message: 'Noticia no encontrada' });
    res.json({ message: 'Noticia eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
