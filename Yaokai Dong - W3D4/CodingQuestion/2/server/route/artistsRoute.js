const router = require('express').Router();
const controller = require('../controller/artists');

router.put('/:artistId', controller.followArtist);

module.exports = router;