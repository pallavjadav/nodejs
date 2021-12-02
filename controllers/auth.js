const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
    try {
        const rawToken = req.headers.authorization.split(" ")[1];
        const decToken = jwt.verify(rawToken, 'mysecret');
        next();
    } catch (err) {
        //console.log(err);
        return res.status(401).json({message: "Not Authorized!"});
    }
}
