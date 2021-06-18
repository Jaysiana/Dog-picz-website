/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const app = express();
var cors = require('cors')
const port = 3000;
app.use(cors())


app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});


