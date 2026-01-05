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
                characters: true,
                players: true,
            }
        });
    } catch(error) {
        throw error;
    }
}

async function addPlayer(name, time, imageId) {
    try {
        return await prisma.player.create({
            data: {
                name: name,
                time: time,
                imageId: imageId
            }
        })

    } catch(error) {
        throw error;
    }
};

async function getListPlayers(imageId) {
    try {
        return await prisma.player.findMany({
            where: {
                imageId
            }
        })

    } catch(error) {
        throw error;
    }
};
 
module.exports = {
    getAllPictures,
    getPicture,
    addPlayer,
    getListPlayers
};


