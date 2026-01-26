const OpenAI = require("openai");
require('dotenv').config();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function run() {
    const response = await client.responses.create({
    model: "gpt-3.5-turbo",
    input: `Odlaw is hiding on the City Center level of Where's Waldo.
Coordinates: 0% horizontal = left, 100% horizontal = right; 0% vertical = bottom, 100% vertical = top.
He is between 57% and 61% horizontally and 92% and 99% vertically.
Convert these coordinates into a relative location (top/middle/bottom and left/center/right)
and give a one-sentence hint that mentions only the relative location. 
Do NOT invent landmarks, buildings, or objects. Keep it short and playful.`
});

    console.log(response.output_text);
};

run();