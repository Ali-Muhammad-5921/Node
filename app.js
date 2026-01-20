const http = require('http');
const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync('./02-express-tutorial/navbar-app/index.html');
const homeStyles = readFileSync('./02-express-tutorial/navbar-app/styles.css');
const homeImage = readFileSync('./02-express-tutorial/navbar-app/logo.svg');
const homeLogic = readFileSync('./02-express-tutorial/navbar-app/browser-app.js');


const server =  http.createServer((req, res) => {
    // console.log('user hit the server .')
    //console.log(req.method); // this tells us which method the user used to make the request e.g GET, POST , DELETE , PUT
    //console.log(req.url); // this tells us which url the user used to make the request e.g / , /about , /api/products

    // set header content type
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(req.url === '/styles.css'){
        res.writeHead(200, {'Content-Type': 'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if(req.url === '/logo.svg'){
        res.writeHead(200, {'Content-Type': 'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    else if(req.url === '/browser-app.js'){
        res.writeHead(200, {'Content-Type': 'application/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000)