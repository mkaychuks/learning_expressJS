const authorize = (req, res, next) => {
    // qiery string parameters
    const { user } = req.query;

    if(user === 'john'){
        req.user = {name: 'John', id: 3}
        next()
    }
    else {
        res.status(404).send('Unauthorized')
    }
}


module.exports = authorize;