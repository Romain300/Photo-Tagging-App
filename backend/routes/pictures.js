const { Router } = require('express');
const { getAllPictures } = require('../controllers/picturesController');

const router = Router();
router.get('/', getAllPictures);

module.exports = router;
