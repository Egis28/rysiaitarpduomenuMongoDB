const User = require('../models/User');
// @desc Register new user
// @route POST /api/user
// @access PUBLIC

const createUser = async (req, res) => {
    if(!req.body.name || !req.body.email || !req.body.password) res.status(404).send("not Found");

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    const result = await user.save();
    res.status(200).send(result);
}

// @desc get all user
// @route get /api/users
// @access PUBLIC
 
const getAllUsers = async (req, res) => {
    const result = await User.find();
    res.send(result)

}
// @desc get user by id
// @route get /api/user/:id
// @access PUBLIC
 
const getUserById = async (req, res) => {
    const result = await User.find({_id: req.params.id});
    res.send(result)
}

module.exports = {
    createUser,
    getAllUsers,
     getUserById
}

