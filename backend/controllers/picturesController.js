const db =  require('../db/queries');

async function getAllPictures(req, res) {
    try {
        const images = await db.getAllPictures();
        return res.status(200).json({ images });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Something went wrong."})
    }
};

module.exports = {
    getAllPictures
};

