const db = require("../db/queries");

async function getUsers (req, res) {
    const users = await db.getUsers();
    res.json(users);
}

module.exports = {
    getUsers,
}