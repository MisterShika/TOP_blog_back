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

async function postAddComment (parentId, authorId, body) {
    try{
        const comment = await prisma.comment.create({
            data:{
                parentId,
                body,
                authorId
            }
        })
        return comment;
    }catch (error){
        console.error("Error posting single comment", error);
        throw error;
    }
}

module.exports = {
    getComments,
    postAddComment
}