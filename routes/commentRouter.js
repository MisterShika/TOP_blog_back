const { Router } = require("express");
const commentRouter = Router();
const commentController = require('../controllers/commentController');
const verifyToken = require("../middleware/auth");

commentRouter.get('/:postId', commentController.getComments);

commentRouter.post('/addComment', verifyToken, commentController.postAddComment);

module.exports = commentRouter;