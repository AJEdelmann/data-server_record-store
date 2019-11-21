const Record = require("../models/Record");
const createError = require("http-errors");

exports.getRecords = async (req, res, next) => {
    try {
        const records = await Record.find();
        res.status(200).send(records);
    } catch (e) {
        next(e);
    }
};

exports.addRecord = async (req, res, next) => {
    try {
        const record = new Record(req.body);
        await record.save();
        res.status(200).send(record);
    } catch (e) {
        next(e);
    }
    //   const record = req.body;
    //   db.get("records")
    //     .push(record)
    //     .last()
    //     .assign({
    //       id: Date.now().toString()
    //     })
    //     .write();

    //   res.status(200).send(record);
};

// records/:id
exports.getRecord = async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const record = await Record.findById(id);
        if (!record) throw new createError.NotFound();
        res.status(200).send(user);
    } catch (e) {
        next(e);
    }

    //   const { id } = req.params;
    //   const record = db
    //     .get("records")
    //     .find({
    //       id
    //     })
    //     .value();

    //   res.status(200).send(record);
};

exports.deleteRecord = async (req, res, next) => {
    try {
        const record = await Record.findAndDelete(req.params.id);
        if (!record) throw new createError.NotFound();
        res.status(200).send(record);
    } catch (e) {
        next(e);
    }
    //   const { id } = req.params;
    //   const record = db
    //     .get("records")
    //     .remove({
    //       id
    //     })
    //     .write();

    //   res.status(200).send(record);
};

exports.updateRecord = async (req, res, next) => {
    try {
        const record = await Record.findByAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!record) throw new createError.NotFound();
        res.status(200).send(record);
    } catch (e) {
        next(e);
    }

    // const {
    //     id
    // } = req.params;
    // const data = req.body;
    // const record = db
    //     .get("records")
    //     .find({
    //         id
    //     })
    //     .assign(data)
    //     .value();

    // res.status(200).send(record);
};