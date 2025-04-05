const express = require('express');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.listen(3000, () => {
    console.log(`Server started on http://localhost:3000`)
});