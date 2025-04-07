require('dotenv').config();

const express = require('express');

const app = express();

const accountRouter = require("./routes/accountRouter");

app.use('/user', accountRouter);

app.listen(3000, () => {
    console.log(`Server started on http://localhost:3000`)
});