const logger = (req,res,next) => {
    const method  = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method , url , time)
    // res.send('Testing ')
    next()

    // we must pass this to the next middle ware unless we are sending back the response .  
}

module.exports = logger