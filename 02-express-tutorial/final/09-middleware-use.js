const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res


// This is some importatn information about middleware in express .js

// The app.use() method in the Express.js framework is the primary way to mount and utilize middleware functions. 
// How it Works

//     Middleware Function: A middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle (conventionally named next).
//     Execution Flow: When a request arrives at the Express server, it passes through a "stack" of middleware functions in the order they were defined using app.use(). Each function can perform operations (e.g., logging, authentication, data parsing), modify the request/response objects, and then either send a response to the client (ending the cycle) or call next() to pass control to the next function in the stack.
//     Path Matching: app.use() can apply middleware globally to all requests or to specific path prefixes. If a path is specified (e.g., app.use('/admin', ...)), the middleware will be executed for any request path starting with that prefix (e.g., /admin, /admin/users, etc.). 




app.use([logger, authorize])
// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
