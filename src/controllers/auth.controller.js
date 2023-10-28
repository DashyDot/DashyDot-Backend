const User = require("../models/User.schema");

const signup = (req, res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password
    });

    user.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err });
        });
};


// TODO: Implement signin
const signin = (req, res) => {

    // const user = { ...req.body };

    // const exist = user.find({user});

    // if (!exist) {
    //     res.status(400).json({ error: "User not found" });
    // } else {
    //     if (req.body.password === exist.password) {
    //         res.status(200).json({ message: "User logged" });
    //     } else {
    //         res.status(400).json({ error: "Wrong password" });
    //     }
    // }

};

module.exports = {
    signup,
    signin
};