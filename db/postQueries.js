const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getPosts () {
    try{
        const posts = await prisma.post.findMany({
            include: {
                author: {
                    select: {
                        email: true
                    },
                },
            },
        });
        return posts;
    }catch (error){
        console.error("Error getting posts", error);
        throw error;
    }
}

async function getSinglePost (id) {
    try{
        const post = await prisma.post.findUnique({
            where: {
                id: id
            },
            include: {
                author: {
                    select: {
                        email: true,
                    },
                },
            }
        });
        return post;
    }catch (error){
        console.error("Error getting single post", error);
        throw error;
    }
}

module.exports = {
    getPosts,
    getSinglePost
}