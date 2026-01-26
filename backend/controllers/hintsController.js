const OpenAI = require("openai");
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

function getRelativeLocation(character) {
    const xCenter = (character.xMin + character.xMax) / 2;
    const yCenter = 1 - (character.yMin + character.yMax) / 2;

    const horizontal = xCenter < 0.33 ? "left" : xCenter < 0.66 ? "center" : "right";
    const vertical = yCenter < 0.33 ? "bottom" : yCenter < 0.66 ? "middle" : "top";

    return `${vertical}-${horizontal}`;
}

const validateUser = [
    body('pictureTitle')
        .trim()
        .notEmpty()
        .withMessage('imageTitle cannot be empty'),
    body('character')
        .isObject()
        .withMessage('character must be an object'),
        
];

const hint = [
    validateUser,

    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {
        const { pictureTitle, character } = req.body;
        const location = getRelativeLocation(character);
        const response = await client.responses.create({
            model: "gpt-3.5-turbo",
            input: `${character.name} is hiding in the ${location} section of "${pictureTitle}".
                    Give a short, playful, one-sentence hint using only this location.
                    Do NOT invent landmarks, buildings, or objects.
                    Keep it playful.`
        });
        const hint = response.output_text;
        return res.status(200).json({ hint });

    }catch(error) {
        return res.status(500).json({ errorMessage: "something went wrong" });
    }

    }
];

module.exports = {
    hint
};

