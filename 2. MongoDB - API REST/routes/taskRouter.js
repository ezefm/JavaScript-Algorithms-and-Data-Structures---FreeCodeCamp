const express = require("express");
const taskModel = require("../schemas/task");
const router = express.Router();


router.get('/:id', (req, res) => {
    taskModel.find({ id: req.params.id }, (error, data) => {
        if(error){
            res.json({ status: 500, data: error });
        } else {
            res.json({ status: 200, data: data });
        }
    });
});

router.get('/', (req, res) => {
    taskModel.find({  }, (error, data) => {
        if(error){
            res.json({ status: 500, data: error });
        } else {
            res.json({ status: 200, data: data });
        }
    });
});

router.delete('/:id', (req, res) => {
    taskModel.findOneAndDelete( {id: req.params.id}, {}, (error, data) => {
        if(error){
            res.json({ status: 500, data: error });
        } else {
            res.json({ status: 200, data: data });
        }
    });
})

router.put("/:id", (req, res) => {
    taskModel.findOneAndUpdate( {id: req.params.id}, req.body, {}, (error, data) => {
        if(error){
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data: data });
    })
});



module.exports = router;