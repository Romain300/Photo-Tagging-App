const prisma = require('./client');

async function main() {

    console.log("Seeding...")
    
    try {
        const image01 = await prisma.image.create({
            data: {
                title: "City Center",
                url: "https://i.imgur.com/LnzE1JH.jpeg",
            }
        });

        const image02 = await prisma.image.create({
            data: {
                title: "The Deep Sea Divers",
                url: "https://i.imgur.com/c6morhS.jpeg",
            }
        });

        const image03 = await prisma.image.create({
            data: {
                title: "The Prehistoric Playground",
                url: "https://i.imgur.com/FAvY6x9.jpeg",
            }
        });

        const image04 = await prisma.image.create({
            data: {
                title: "The Great Maze",
                url: "https://i.imgur.com/hEI7v9x.jpeg",
            }
        });

        const CharactersImage01 = await prisma.character.createMany({
            data: [
                {
                name: "Waldo",
                imageId: image01.id, 
                xMin: 0.39,
                xMax: 0.47,
                yMin: 0.69,
                yMax: 0.82,
                },
                {
                name: "Woof",
                imageId: image01.id,
                xMin: 0.55,
                xMax: 0.59,
                yMin: 0.28,
                yMax: 0.34,
                },
                {
                name: "Wenda",
                imageId: image01.id, 
                xMin: 0.42,
                xMax: 0.45,
                yMin: 0.57,
                yMax: 0.63,
                },
                {
                name: "Whitebeard",
                imageId: image01.id,
                xMin: 0.63,
                xMax: 0.68,
                yMin: 0.74,
                yMax: 0.81,
                },
                {
                name: "Odlaw",
                imageId: image01.id,
                xMin: 0.57,
                xMax: 0.61,
                yMin: 0.92,
                yMax: 0.99,
                },
            ],
        }); 

        const CharactersImage02 = await prisma.character.createMany({
            data: [
                {
                name: "Waldo",
                imageId: image02.id, 
                xMin: 0.46,
                xMax: 0.49,
                yMin: 0.20,
                yMax: 0.25,
                },
                {
                name: "Woof",
                imageId: image02.id,
                xMin: 0.94,
                xMax: 0.98,
                yMin: 0.37,
                yMax: 0.43,
                },
                {
                name: "Wenda",
                imageId: image02.id, 
                xMin: 0.21,
                xMax: 0.25,
                yMin: 0.31,
                yMax: 0.36,
                },
                {
                name: "Whitebeard",
                imageId: image02.id,
                xMin: 0.67,
                xMax: 0.71,
                yMin: 0.15,
                yMax: 0.20,
                },
            ],
        }); 

        const CharactersImage03 = await prisma.character.createMany({
            data: [
                {
                name: "Waldo",
                imageId: image03.id, 
                xMin: 0.92,
                xMax: 0.96,
                yMin: 0.03,
                yMax: 0.09,
                },
                {
                name: "Wenda",
                imageId: image03.id, 
                xMin: 0.25,
                xMax: 0.29,
                yMin: 0.61,
                yMax: 0.67,
                },
                {
                name: "Whitebeard",
                imageId: image03.id,
                xMin: 0.27,
                xMax: 0.31,
                yMin: 0.37,
                yMax: 0.43,
                },
                {
                name: "Odlaw",
                imageId: image03.id,
                xMin: 0.88,
                xMax: 0.92,
                yMin: 0.53,
                yMax: 0.58,
                },
            ],
        }); 

        const CharactersImage04 = await prisma.character.createMany({
            data: [
                {
                name: "Waldo",
                imageId: image04.id, 
                xMin: 0.54,
                xMax: 0.58,
                yMin: 0.41,
                yMax: 0.44,
                },
                {
                name: "Woof",
                imageId: image04.id,
                xMin: 0.10,
                xMax: 0.14,
                yMin: 0.49,
                yMax: 0.55,
                },
                {
                name: "Wenda",
                imageId: image04.id, 
                xMin: 0.29,
                xMax: 0.33,
                yMin: 0.58,
                yMax: 0.64,
                },
                {
                name: "Whitebeard",
                imageId: image04.id,
                xMin: 0.64,
                xMax: 0.68,
                yMin: 0.29,
                yMax: 0.35,
                },
                {
                name: "Odlaw",
                imageId: image04.id,
                xMin: 0.42,
                xMax: 0.46,
                yMin: 0.30,
                yMax: 0.36,
                },
            ],
        }); 
    } catch(error) {
        console.error(error);
    }
    
    console.log("Database populated")

};

main();

// https://imgur.com/gallery/wheres-waldo-all-answers-f9CwD
// https://imgur.com/gallery/sorry-ruining-everything-you-had-planned-today-oGbAS
