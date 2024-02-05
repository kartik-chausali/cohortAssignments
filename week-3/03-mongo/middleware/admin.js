// Middleware for handling auth
const {Admin} = require('../db/index')
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const{username , password} = req.headers;
     Admin.findOne({username})
     .then((value)=>{
        if(value){
            next();
        }else{
            res.status(403).json({mssg:"Admin doesn't exist"})
        }
     })    
}

module.exports = adminMiddleware;