const db = require("../db/queries");

async function getUsers (req, res) {
    const users = await db.getUsers();
    res.json(users);
}

async function getSingleUser (req, res) {
    const email = req.params.email;
    const user = await db.getSingleUser(email);
    res.json(user);
}

module.exports = {
    getUsers,
    getSingleUser,
}