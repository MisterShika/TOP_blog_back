const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getPosts () {
    try{
        const posts = await prisma.post.findMany();
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