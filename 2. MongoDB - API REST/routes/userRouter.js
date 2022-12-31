const express = require("express");
const userModel = require('../schemas/user');
const router = express.Router();


router.get('/:id', (req, res) => {
    userModel.find({ id: req.params.id }, (error, data) => {
        if(error){
            res.json({ status: 500, data: error });
        } else {
            res.json({ status: 200, data: data });
        }
    });
});

router.get('/', (req, res) => {
    userModel.find({  }, (error, data) => {
        if(error){
            res.json({ status: 500, data: error });
        } else {
            res.json({ status: 200, data: data });
        }
    });
});

router.post('/create', (req, res) => {
    console.log("The body is: ", req.body);

    const user = new userModel(req.body);

    user
        .save()
        .then( (document) => {
            res.json({ status: 200, data: document });
        })
        .catch( (error) => {
            res.json({ status: 500, data: error });
        });
});

router.delete('/:id', (req, res) => {
    userModel.findOneAndDelete( {id: req.params.id}, {}, (error, data) => {
        if(error){
            res.json({ status: 500, data: error });
        } else {
            res.json({ status: 200, data: data });
        }
    });
})

router.put("/:id", (req, res) => {
    userModel.findOneAndUpdate( {id: req.params.id}, req.body, {}, (error, data) => {
        if(error){
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data: data });
    })
});

module.exports = router;