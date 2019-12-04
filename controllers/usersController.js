const User = require("../models/User");
const createError = require("http-errors");

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
            .sort('lastName')
            .select('-password -__v -tokens._id');
        res.status(200).send(users);
    } catch (e) {
        next(e);
    }
};

exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).select('-password -__v');
        if (!user) throw new createError.NotFound();
        res.status(200).send(user);
    } catch (e) {
        next(e);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) throw new createError.NotFound();
        res.status(200).send(user);
    } catch (e) {
        next(e);
    }
};

exports.updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!user) throw new createError.NotFound();
        const data = user.getPublicFields();
        res.status(200).send(data);
    } catch (e) {
        next(e);
    }
};

exports.addUser = async (req, res, next) => {
    try {
        const user = new User(req.body);
        const token = user.generateAuthToken();
        await user.save();
        const data = user.getPublicFields();
        res
            .status(200)
            .header("x-auth", token)
            .send(data);
    } catch (e) {
        next(e);
    }
};

exports.loginUser = async (req, res, next) => {
    res.status(200).send('Great password');
    // Get email and pass from the body
    // Get the user by email
    // Access user.password (hashed password)
    // Write a method that takes in user.password and password
}

exports.authenticateUser = async (req, res, next) => {
    res.status(200).send(req.user);
};