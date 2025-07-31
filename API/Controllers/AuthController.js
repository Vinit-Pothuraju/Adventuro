const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User")

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
     

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: 'User already exists, you can login',
                success: false
            });
        }

        const newUser = new UserModel({ name, email,  password });
        
        
        newUser.password = await bcrypt.hash(password, 10);

        
        await newUser.save();
        
       
        const jwtToken = jwt.sign(
            { email: newUser.email, _id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(201).json({
            jwtToken,
            message: "Signup successfully",
            user:{
                name:name,
                email:email,
            },
            success: true
        });
    } catch (err) {
        console.error(err);  
        res.status(500).json({
            message: "Internal server error",
            error: err.message, 
            success: false
        });
    }
}

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Auth failed: email or password is incorrect';

        
        if (!user) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            user: {
                name: user.name,
                email: user.email,
                
             }
            });
    } catch (err) {
        console.error(err);  
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

module.exports = {
    signup,
    signin
}
