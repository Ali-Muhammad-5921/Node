const express = require('express');
const router = express.Router();


router.post('/',(req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).send({status:false , msg:'Please provide name value'})
    }
    console.log(`Welcome ${name}`);
    res.status(201).send({status:true , person:name})
})

module.exports = router;