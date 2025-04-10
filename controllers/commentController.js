const db = require("../db/commentQueries");

async function getComments (req, res) {
    let {postId} = req.params;
    postId = parseInt(postId);
    const comments = await db.getComments(postId);
    res.json(comments);
}

module.exports = {
    getComments,
}