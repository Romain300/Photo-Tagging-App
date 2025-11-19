const prisma = require('./client');

async function getAllPictures() {
    try {
        return await prisma.image.findMany();
    } catch(error) {
        throw error;
    }
};

async function getPicture(pictureId) {
    try {
        return await prisma.image.findUnique({
            where: {
                id: pictureId
            },
            include: {
                characters: true
            }
        });
    } catch(error) {
        throw error;
    }
}
 
module.exports = {
    getAllPictures,
    getPicture,
};


