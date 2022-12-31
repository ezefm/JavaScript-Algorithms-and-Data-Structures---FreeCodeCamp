const express = require('express'); 
const routerApi = require('./routes');
const db = require('./models');
const app = express();


app.use(express.json());
routerApi(app);

db.sync().then( () => {
    console.log('SQLite')
}).catch( () => {
    console.log('Error to connect to database')
});

app.listen(3000, 'localhost', () => {
    console.log("Server listening on port 3000")
});