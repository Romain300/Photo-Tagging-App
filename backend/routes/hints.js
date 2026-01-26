const { Router } = require('express');
const { hint } = require('../controllers/hintsController');

const router = Router();
router.post('/', hint);

module.exports = router;