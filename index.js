"use strict";
const express = require('express');
const app = express();
const port = 3001;
app.get('/', (req, res) => res.send('Hello !'));
app.get('/api/pokemons/1', (req, res) => res.send('Hello, Bulbizarre !'));
app.listen(port, () => console.log(`Listening on port ${port} !`));
