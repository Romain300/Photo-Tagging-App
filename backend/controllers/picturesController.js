const db =  require('../db/queries');

async function getAllPictures(req, res) {
    try {
        const images = await db.getAllPictures();
        return res.status(200).json({ images });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ errors: "Something went wrong." })
    }
};

async function getPicture(req, res) {
    try {
        const { pictureId } = req.params;
        const image = await db.getPicture(parseInt(pictureId));

        if (!image) {
            return res.status(404).json({
                error: "Picture not found",
            });
        }

        return res.status(200).json({ image });
    } catch(error) {
        console.error(error);
        res.status(500).json({ errors: "Something went wrong." });
    }
}

module.exports = {
    getAllPictures,
    getPicture
};

