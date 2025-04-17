const db = require("../db/commentQueries");

async function getComments (req, res) {
    let {postId} = req.params;
    postId = parseInt(postId);
    const comments = await db.getComments(postId);
    res.json(comments);
}

async function postAddComment (req, res) {
    const {content} = req.body;
    const postId = parseInt(req.body.postId);
    const userId = parseInt(req.user.loginData.id);

    try{
        const comment = await db.postAddComment(postId, userId, content);
        res.status(201).json(comment);
    }catch (error){
        console.error("Post create controller error:", error);
        res.status(500).json({ error: 'Failed to create user' });
    }
}

module.exports = {
    getComments,
    postAddComment
}