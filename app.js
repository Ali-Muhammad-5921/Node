
const express = require('express');
const app =  express();
const people = require('./02-express-tutorial/route/people')
const auth = require('./02-express-tutorial/route/auth')



//post method -  unlike as get is the default method , browser doesn't provide post method
// static  assets
app.use(express.static('./02-express-tutorial/methods-public'));

// parse from urlencoded form data
app.use(express.urlencoded({extended:false}))

// parse json
app.use(express.json());

app.use('/api/people',people)
app.use('/login',auth)





app.listen(5000,() => {
    console.log('Server listening on port 5000 ....');
})