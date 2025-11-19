const { Router } = require('express');
const { getAllPictures, getPicture } = require('../controllers/picturesController');

const router = Router();
router.get('/', getAllPictures);
router.get('/:pictureId', getPicture);

module.exports = router;
