const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

async function getUsers () {
    try{
        const users = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                role: true,
            },
    });
        return users;
    }catch (error){
        console.error("Error in getting users: ", error);
        throw error;
    }
}

async function getSingleUser (id) {
    try{
        const user = await prisma.user.findUnique({
            where : {
                id: id
            },
            select: {
                id: true,
                email: true,
                role: true,
            }
        });
        return user;
    }catch (error) {
        console.error("Error in getting single user: ", error);
        throw error;
    }
}

async function addSingleUser (email, password) {
    const hashedPassword = await bcrypt.hash(password, 12);
    try{
        const user = await prisma.user.create({
            data:{
                email: email,
                password: hashedPassword
            }
        })
        return user;
    }catch (error){
        console.error("Error adding single user: ", error);
        throw error;
    }
}

async function loginUser (email, password) {
    console.log('DB Function fired');
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    });
    if (!user) return null;

    const match = await bcrypt.compare(password, user.password);
    if (!match) return null;

    return true;
}

module.exports = {
    getUsers,
    getSingleUser,
    addSingleUser,
    loginUser
}