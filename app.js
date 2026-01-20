// there are two ways to do it :-

//      1.

// const app = require('express')();

//      2.

const express = require('express');
const app = express();

// Both ways are correct and will create an instance of an Express application.
// The first way is a shorthand method that directly requires and invokes the Express module in one line.
// The second way is more explicit, where you first require the Express module and then call it to create the app instance.

// You can use either method based on your preference for code clarity or conciseness.

// we can use the following methods : 
//      app.get()
//      app.post()
//      app.put()
//      app.delete()
//     app.all()
//     app.use()
//    app.listen()



app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});
app.get('/about', (req, res) => {
    res.status(200).send('About Page');
});
app.use((req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
