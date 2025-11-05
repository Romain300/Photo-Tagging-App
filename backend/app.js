const express = require('express');
const routes= require('./routes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: "Welcome"
    })
});

app.use('/pictures', routes.pictures)

app.listen(PORT, () => {
     console.log(`Listening on PORT ${PORT}`);
});
