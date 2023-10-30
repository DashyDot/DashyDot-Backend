const User = require("../models/User.schema");


// TODO: Implement signin
const signin = (req, res) => {

    const { user, password } = req.body;

    const userExist = User.findOne({ user: user, password: password });

    if(userExist) {
        res.status(200).json({message: "User logged in successfully"});
    } else {
        res.status(400).json({message: "User not found"});
    }

};

module.exports = {
    signin
};