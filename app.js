// streams are used to read from large files 

const { createReadStream } = require('fs');

const stream = createReadStream('the address of the file goes here');

stream.on('data' , (result) => { // here stream is an event and data is the event it's written in the documentation 
    console.log(result)
})

stream.on('error',(err) => console.log(err);)