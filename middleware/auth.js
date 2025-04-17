const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.ACCESS_TOKEN_SECRET;

function verifyToken (req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message: 'No token provided'});
    }

    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    }catch(error){
        return res.status(403).json({message: 'Invalid or expired token'});
    }
}

module.exports = verifyToken;