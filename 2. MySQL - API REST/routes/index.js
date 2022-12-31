const express = require('express');
const userRouter = require('./userRouter');
const roleRouter = require('./roleRouter');
const taskRouter = require('./taskRouter'); 

function routerApi(app){
    const router = express.Router();
    app.use('/api', router)
    router.use('/roles', roleRouter);
    router.use('/users', userRouter);
    router.use('/tasks', taskRouter);
  }
  
module.exports = routerApi;