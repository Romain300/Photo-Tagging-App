const prisma = require('./client');

async function main() {

    console.log("Seeding...")
    
    try {
        const image = await prisma.image.create({
            data: {
                title: "City Center",
                url: "https://i.imgur.com/LnzE1JH.jpeg",
            }
        });

        const testCharacters = await prisma.character.createMany({
            data: [
                {
                name: "Waldo",
                imageId: image.id, 
                xMin: 0.39,
                xMax: 0.47,
                yMin: 0.69,
                yMax: 0.82,
                },
                {
                name: "Woof",
                imageId: image.id,
                xMin: 0.55,
                xMax: 0.59,
                yMin: 0.28,
                yMax: 0.34,
                },
                {
                name: "Wenda",
                imageId: image.id, 
                xMin: 0.42,
                xMax: 0.45,
                yMin: 0.57,
                yMax: 0.63,
                },
                {
                name: "Whitebeard",
                imageId: image.id,
                xMin: 0.63,
                xMax: 0.68,
                yMin: 0.74,
                yMax: 0.81,
                },
                {
                name: "Odlaw",
                imageId: image.id,
                xMin: 0.57,
                xMax: 0.61,
                yMin: 0.92,
                yMax: 0.99,
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