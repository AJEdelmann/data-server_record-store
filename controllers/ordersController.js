const Order = require("../models/Order");
const createError = require("http-errors");

exports.getOrders = async (req, res, next) => {
    try {
        // you can choose what you want to show like this:
        // const orders = await Order.find().populate('records', 'title artist year price -_id');
        const orders = await Order.find().populate('records.record', ' -__v');
        res.status(200).send(orders);
    } catch (e) {
        next(e);
    }
};

exports.addOrder = async (req, res, next) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(200).send(order);
    } catch (e) {
        next(e);
    }
};

exports.getOrder = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id).populate('records.record');
        if (!order) throw new createError.NotFound();
        res.status(200).send(user);
    } catch (e) {
        next(e);
    }
};

exports.deleteOrder = async (req, res, next) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) throw new createError.NotFound();
        res.status(200).send(order);
    } catch (e) {
        next(e);
    }
};

exports.updateOrder = async (req, res, next) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!order) throw new createError.NotFound();
        res.status(200).send(order);
    } catch (e) {
        next(e);
    }
};