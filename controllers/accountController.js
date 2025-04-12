const db = require("../db/accountQueries");
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function getUsers (req, res) {
    const users = await db.getUsers();
    res.json(users);
}

async function getSingleUser (req, res) {
    let {id} = req.params;
    id = parseInt(id);
    const user = await db.getSingleUser(id);
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

async function postLogin (req, res) {
    const {email, password} = req.body;
    const loginData = await db.loginUser(email, password);
    if(!loginData){
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(loginData, process.env.ACCESS_TOKEN_SECRET);

    res.json(token);
}

module.exports = {
    getUsers,
    getSingleUser,
    postAddUser,
    postLogin,
}