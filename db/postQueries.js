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

async function getPostsByAuthor (id) {
    try{
        const posts = await prisma.post.findMany({
            where: {
                authorId: id
            }
        })
        return posts;
    }catch (error){
        console.error("Error getting posts by author", error);
        throw error;
    }
}

async function postAddPost (id, title, body) {
    try{
        const post = await prisma.post.create({
            data:{
                title,
                body,
                authorId: id
            }
        })
        return post;
    }catch (error){
        console.error("Error creating post backend", error);
        throw error;
    }
}

module.exports = {
    getPosts,
    getSinglePost,
    getPostsByAuthor,
    postAddPost
}