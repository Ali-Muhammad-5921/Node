const express = require('express');
const app =  express();
let {people} = require('./02-express-tutorial/data')

//post method -  unlike as get is the default method , browser doesn't provide post method
// static  assets
app.use(express.static('./02-express-tutorial/methods-public'));

// parse from urlencoded form data
app.use(express.urlencoded({extended:false}))

// parse json
app.use(express.json());

app.post('/api/people',(req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).send({status:false , msg:'Please provide name value'})
    }
    res.status(201).send({status:true , person:name})
})




//get method
app.get('/api/people',(req, res) => {
    res.status(200).json({status:true , data: people})
})



app.listen(5000,() => {
    console.log('Server listening on port 5000 ....');
})