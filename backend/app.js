const express = require('express');
const routes= require('./routes');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: "Welcome"
    })
});

app.use('/players', routes.players);
app.use('/pictures', routes.pictures);
app.use('/hints', routes.hints);

app.listen(PORT, () => {
     console.log(`Listening on PORT ${PORT}`);
});
