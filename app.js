const express = require('express');
const app = express();
const movieRoute = require('./routes/movie');

app.use(movieRoute);

app.listen(5002);