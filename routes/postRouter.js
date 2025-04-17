const { Router } = require("express");
const postRouter = Router();
const postController = require('../controllers/postController');
const verifyToken = require("../middleware/auth");

postRouter.get('/', postController.getPosts);
postRouter.get('/postByAuthor/:userId', postController.getPostsByAuthor);
postRouter.get('/:postId', postController.getSinglePost);

postRouter.post('/addPost', verifyToken, postController.postAddPost)

module.exports = postRouter;