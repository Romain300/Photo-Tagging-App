const { Router } = require('express');
const { addNewPlayer, getListPlayers } = require('../controllers/playersController');

const router = Router();
router.post('/', addNewPlayer);
router.get('/:pictureId', getListPlayers);

module.exports = router;
