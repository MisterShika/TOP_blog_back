require('dotenv').config();

const express = require('express');

const app = express();

const accountRouter = require("./routes/accountRouter");
const postRouter = require("./routes/postRouter");

app.use(express.json());

app.use('/users', accountRouter);

app.use('/posts', postRouter);

app.listen(3000, () => {
    console.log(`Server started on http://localhost:3000`)
});