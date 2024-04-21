const express = require('express')
require('dotenv').config()
const app = express();

app.get('/health', (req, res) => {
    res.send('Bharat')
});

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server listening At ${process.env.PORT || 4000}`)
});