const express = require('express');
const routerApi = require('./routes');
const app = express();
const mongoose = require('mongoose');
const log = require('./middlewares/log');
const auth = require('./middlewares/authentication');

app.use(express.json()); // Built-in middleware in express
app.use(log); // Logging middleware, application level
routerApi(app);

mongoose.connect('mongodb://127.0.0.1:27017/mongoapidevlights', (error) => {
    if(error) {
        console.log('An error occurs in the connection', error);
    } else {
        console.log('Connection established')
    }
});

app.listen(3000);
