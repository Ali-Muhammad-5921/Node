const authorize =  (req, res , next) => {
    const {user} = req.query;
    if(user === 'jimmy'){
        req.user = {name : "Jimmy Morgan McGill" , id: 3};
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize