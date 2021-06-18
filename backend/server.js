/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const app = express();
var cors = require('cors')
const port = 3000;
const breeds = require('./routes/books')



app.use(cors())

app.use('/api',books)
app.get('/about', (req, res) => {
    res.send('This is about page')
});

app.get('/homepage', (req, res) => {
    res.send('This is the Home page')
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});


