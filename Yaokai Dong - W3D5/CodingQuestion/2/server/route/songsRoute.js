const router = require('express').Router();
const controller = require('../controller/songs');

router.get('/', controller.getByLanguage);
router.get('/:category', controller.getByCategory);
// I have to put additonal path to distinguish between /:categoey and /:search. Otherwise, Express will never reach /:search
router.get('/search/:search', controller.getByParam);
router.put('/:songId', controller.likeASong);

module.exports = router;