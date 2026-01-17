const {readFileSync,writeFileSync} = require('fs');
// const fs = require('fs');
// and then use the readFileSync function 
// so that we don't have to prefix it with fs.
// Actully the above line was suggested so here's what I was going to say 
// the line number 1 and line 2 are two different ways of doing the same thing 

//Then we read the files
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first,second);

// Now we will write to a new file
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag : 'a'} // this flag appends the data instead of overwriting it
);
//