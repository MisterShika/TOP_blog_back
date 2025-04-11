const { Router } = require("express");
const postRouter = Router();
const postController = require('../controllers/postController');

postRouter.get('/', postController.getPosts);
postRouter.get('/postByAuthor/:userId', postController.getPostsByAuthor);
postRouter.get('/:postId', postController.getSinglePost);


module.exports = postRouter;