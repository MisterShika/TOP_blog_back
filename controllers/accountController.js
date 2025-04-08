const db = require("../db/accountQueries");

async function getUsers (req, res) {
    const users = await db.getUsers();
    res.json(users);
}

async function getSingleUser (req, res) {
    const email = req.params.email;
    const user = await db.getSingleUser(email);
    res.json(user);
}

async function postAddUser (req, res) {
    const {email, password} = req.body;
    try{
        const user = await db.addSingleUser(email, password);
        res.status(201).json(user.email);
    }catch (error){
        console.error("Controller error:", error);
        res.status(500).json({ error: 'Failed to create user' });
    }
}

module.exports = {
    getUsers,
    getSingleUser,
    postAddUser,
}