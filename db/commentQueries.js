const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getComments (id) {
    try{
        const comments = await prisma.comment.findMany({
            where : {
                parentId: id
            },
            include: {
                author: {
                    select: {
                        email: true,
                    },
                },
            }
        })
        return comments;
    }catch (error){
        console.error("Error getting comments", error);
        throw error;
    }
}

module.exports = {
    getComments
}