const db = require("../db/commentQueries");

async function getComments (req, res) {
    const {postId} = req.body;
    const comments = await db.getComments(postId);
    res.json(comments);
}

module.exports = {
    getComments,
}