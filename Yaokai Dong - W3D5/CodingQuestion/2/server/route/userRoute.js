const router = require('express').Router();
const controller = require('../controller/user');

router.get('/songs', controller.getAllSongs);
router.put('/info', controller.updateProfile);
router.post('/signup', controller.createNewUser);
router.post('/login', controller.loginUser);
router.post('/logout', controller.logoutUser);

module.exports = router;
