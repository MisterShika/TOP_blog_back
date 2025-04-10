const { Router } = require("express");
const commentRouter = Router();
const commentController = require('../controllers/commentController');

commentRouter.get('/:postId', commentController.getComments);

module.exports = commentRouter;