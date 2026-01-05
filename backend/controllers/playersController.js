const db = require('../db/queries');
const { body, validationResult } = require("express-validator");

const validateUser = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Name cannot be empty')
];

const addNewPlayer = [
    validateUser,

    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { name, time, pictureId } = req.body;
            const newPlayer = await db.addPlayer(name, time, parseInt(pictureId));
            return res.status(201).json({
                newPlayer,
                message: "New player has been created"
            });

        } catch(error) {
            console.error(error);
            return res.status(500).json({ errorMessage: "something went wrong during comment creation" })
        }
    }
    
];

async function getListPlayers(req, res) {
    try {
        const { pictureId } = req.params;
        const listPlayers = await db.getListPlayers(parseInt(pictureId));
        return res.status(200).json({ listPlayers });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ errors: "Something went wrong." });
    }
};

module.exports = {
    addNewPlayer,
    getListPlayers
};
