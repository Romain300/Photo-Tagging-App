const prisma = require('./client');

async function main() {

    console.log("Seeding...")
    
    try {
        const setUpImages = await prisma.image.createMany({
            data: [
                { title: "Beach Scene", url: "https://www.paperflite.com/sites/default/files/inline-images/Where%27s%20Waldo_0.jpg" },
                { title: "City Crowd", url: "https://i.imgur.com/sHuAyTS.jpeg" },
                { title: "Park Puzzle", url: "https://wallpapers.com/images/high/where-s-waldo-amusement-park-yxfz34fnvbhuau7x.webp" },
            ]
        });

        const testCharacters = await prisma.character.createMany({
            data: [
                {
                name: "Test 1",
                imageId: 1, 
                xMin: 0.1,
                xMax: 0.2,
                yMin: 0.3,
                yMax: 0.4,
                },
                {
                name: "Test 2",
                imageId: 1,
                xMin: 0.5,
                xMax: 0.6,
                yMin: 0.2,
                yMax: 0.3,
                },
                {
                name: "Test 3",
                imageId: 2, // if you have another image
                xMin: 0.0,
                xMax: 0.1,
                yMin: 0.0,
                yMax: 0.1,
                },
                {
                name: "Test 4",
                imageId: 2,
                xMin: 0.3,
                xMax: 0.5,
                yMin: 0.3,
                yMax: 0.5,
                },
                {
                name: "Test 5",
                imageId: 3,
                xMin: 0.7,
                xMax: 0.8,
                yMin: 0.6,
                yMax: 0.7,
                },

                {
                name: "Test 6",
                imageId: 3,
                xMin: 0.7,
                xMax: 0.8,
                yMin: 0.6,
                yMax: 0.7,
                },
            ],
        }); 
    } catch(error) {
        console.error(error);
    }
    
    console.log("Database populated")

};

main();

