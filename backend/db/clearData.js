const prisma = require('./client');

async function clearData() {
    await prisma.character.deleteMany({});
    await prisma.image.deleteMany({});
}

clearData();