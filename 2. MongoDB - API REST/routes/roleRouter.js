const express = require("express");
const roleModel = require("../schemas/role");
const router = express.Router();


router.get('/:id', (req, res) => {
    roleModel.find({ id: req.params.id }, (error, data) => {
        if(error){
            res.json({ status: 500, data: error });
        } else {
            res.json({ status: 200, data: data });
        }
    });
});

router.get('/', (req, res) => {
    roleModel.find({  }, (error, data) => {
        if(error){
            res.json({ status: 500, data: error });
        } else {
            res.json({ status: 200, data: data });
        }
    });
});

router.delete('/:id', (req, res) => {
    roleModel.findOneAndDelete( {id: req.params.id}, {}, (error, data) => {
        if(error){
            res.json({ status: 500, data: error });
        } else {
            res.json({ status: 200, data: data });
        }
    });
})

router.put("/:id", (req, res) => {
    roleModel.findOneAndUpdate( {id: req.params.id}, req.body, {}, (error, data) => {
        if(error){
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data: data });
    })
});



module.exports = router;