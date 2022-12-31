const express = require('express'); 
const userModel = require('../models/user');
const router = express.Router();


router.get('/',async (req, res) => {
    const data = await userModel.findAll();
    res.json({ status: 200, data: data })
})

router.post('/create', async (req, res) => {
    const data = await userModel.create(req.body);
    res.json( {status: 200, data} );
});

router.delete('/:id', async (req, res) => {
    userModel.destroy().then((data) => {
        res.json( {status:200, data} );
    });
})

module.exports = router;