const jwt = require('jsonwebtoken');
const User = require('../models/auth-user');

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: "Unauthorized HTTP" });
    }
    
    const jwtToken = token.replace("Bearer", "").trim();
    
    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWTSECRET);
        console.log(isVerified);
        
        const userData = await User.findOne({ email: isVerified.email }).select('-password');
        
        if (!userData) {
            return res.status(401).json({ message: "Unauthorized HTTP" });
        }
        
        req.user = userData;
        req.token = token;
        req.userID = userData._id;
        
        next();
    } catch (error) {
        console.log("Error verifying JWT: ", error);
        return res.status(401).json({ message: "Unauthorized HTTP" });
    }
}

module.exports = authMiddleware;
