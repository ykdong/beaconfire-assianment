const router = require('express').Router();
const controller = require('../controller/user');

router.get('/songs', controller.getAllSongs);
router.put('/info', controller.updateProfile);

module.exports = router;
