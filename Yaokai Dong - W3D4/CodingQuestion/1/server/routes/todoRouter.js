const router = require("express").Router();
const todoController = require('../controller/todoController');

router.get('/:filename', todoController.get_item);
router.post('/:filename', todoController.create_item);
router.put('/:filename', todoController.modify_item);
router.delete('/:filename', todoController.delete_item);

module.exports = router;
