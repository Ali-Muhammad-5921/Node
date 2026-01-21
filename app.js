
const path = require('path');
const express = require('express');
const app = express();


// setup static and middleware
app.use(express.static('./02-express-tutorial/public'));

// app.get(('/'),(req,res) => {
//     res.status(200).sendFile(path.resolve(__dirname,'./02-express-tutorial/navbar-app/index.html'));
// }); we can remove this because of static middleware

app.use((req,res) => {
    res.status(404).send('Not Found');
})


app.listen(3000,() => {
    console.log('Server is running on port 3000');
})