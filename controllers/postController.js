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

module.exports = {
    getPosts,
    getSinglePost,
}