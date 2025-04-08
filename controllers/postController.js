const db = require("../db/postQueries");

async function getPosts (req, res) {
    const posts = await db.getPosts();
    res.json(posts);
}

module.exports = {
    getPosts,
}