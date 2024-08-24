const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.post('/', (req, res) => {
    res.send({ joke: 'my name is sarthak mehta' });
});

// Export the Express API as a module
module.exports = app;
