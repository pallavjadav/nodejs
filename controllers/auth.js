const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
    
    const rawToken = req.headers.authorization.split(" ")[1];
    const decToken = jwt.verify(rawToken, 'mysecret');


}
