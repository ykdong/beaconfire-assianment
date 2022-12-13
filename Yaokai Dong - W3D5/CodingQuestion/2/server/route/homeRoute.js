const router = require('express').Router();
const controller = require('../controller/home');

router.get('/', controller.getAllInfo);

module.exports = router;