import express = require('express');
const PORT = 3000;

const app: express.Application = express();

app.get('/', (req, res) => res.send('hello'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
