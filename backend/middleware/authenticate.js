const jwt = require('jsonwebtoken')
require('dotenv').config()

function authenticateToken(req, res, next) {
    
    const authHeader = req.headers['authorization'];
    
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token == null || token === undefined) return res.sendStatus(401);//unauthorized
    

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err,data) => { 
        console.log('data',data);
        if(err)console.log(err);
        req.user = data;
        next();
    });
}

module.exports = authenticateToken
//auth middleware 