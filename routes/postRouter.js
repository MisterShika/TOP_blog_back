const { Router } = require("express");
const postRouter = Router();
const postController = require('../controllers/postController');

postRouter.get('/', postController.getPosts);
postRouter.get('/:postId', postController.getSinglePost);

module.exports = postRouter;