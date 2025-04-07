const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getUsers () {
    try{
        const users = await prisma.user.findMany();
        return users;
    }catch (error){
        console.error("Error in getting users: ", error);
        throw error;
    }
}

module.exports = {
    getUsers,
}