const db = require("../db/postQueries");

async function getPosts (req, res) {
    const posts = await db.getPosts();
    res.json(posts);
}

async function getSinglePost (req, res) {
    let {postId} = req.params;
    postId = parseInt(postId);
    const post = await db.getSinglePost(postId);
    res.json(post);
}

async function getPostsByAuthor (req, res) {
    let {userId} = req.params;
    userId = parseInt(userId);
    const posts = await db.getPostsByAuthor(userId);
    res.json(posts);
}

async function postAddPost (req, res) {
    const {title, content} = req.body;
    const userId = req.user.loginData.id;

    try{
        const post = await db.postAddPost(userId, title, content);
        res.status(201).json(post);
    }catch (error){
        console.error("Post create controller error:", error);
        res.status(500).json({ error: 'Failed to create user' });
    }
}

module.exports = {
    getPosts,
    getSinglePost,
    getPostsByAuthor,
    postAddPost
}