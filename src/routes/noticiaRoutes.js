const express = require('express');
const multer = require('multer');
const upload = multer();
const router = express.Router();
const noticiaController = require('../controllers/noticiaController');

router.post('/', upload.single('img'), noticiaController.createNoticia);
router.get('/', noticiaController.getNoticias);
router.get('/:id', noticiaController.getNoticiaById);
router.put('/:id', upload.single('img'), noticiaController.updateNoticia);
router.delete('/:id', noticiaController.deleteNoticia);

module.exports = router;
