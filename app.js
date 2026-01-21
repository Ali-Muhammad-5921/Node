const express = require('express');
const app =  express();
const logger = require('./logger')
const authorize = require('./authorize')


// req => middleware => res 

app.use([logger, authorize]); 
// By writing logger here , we can simply use logger in all the routes without explicitly writing it there . 
//but the order is neccessary , so it should be above the routes it's used in . 
// we can also write it for some specific paths like the two api paths 
// api.use('/api',logger);

app.get('/',(req,res) => {
    

    res.send('Home Page')
});
app.get('/about',(req,res) => {
    res.send('About Page');
});

app.get('/api/products',(req,res) => {
    res.send('Products');
});

app.get('/api/items',(req,res) => {
    res.send('Items');
});

app.listen(5000,() => {
    console.log('Server listening on port 5000 ....');
})