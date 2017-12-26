const mongojs = require('mongojs');
const config = require("../config/database");


let db;
function DB() {
    db = mongojs(config.database + "anymatch");

}


DB.prototype.save = function (item, tableName, sId = "") {
    return new Promise((res, rej) => {
        let id = mongojs.ObjectId(item._id);
        delete item._id
        db.collection(tableName + sId).update({ _id: id }, item, { upsert: true }, (err, doc) => {
            item._id = id.toString()
            res(item);
        })
    });
}

DB.prototype.pushToArray = function (item, _id, arrayName, tableName, sId = "") {
    return new Promise((res, rej) => {
        let id = mongojs.ObjectId(_id);
        let push = {};
        push[arrayName + ""] = { $each: [item], $position: 0 };
        db.collection(tableName + sId).update({ _id: id }, { $push: push }, (err, doc) => {
            res(doc);
        })
    });
}

DB.prototype.find = function (tableName, sId = "", query, projection) {
    // console.log(query)
    // console.log(tableName)

    return new Promise((res, rej) => {
        db.collection(tableName + sId).find(query, projection, (err, doc) => {
            res(doc);
        });
    });
}

DB.prototype.findOne = function (item, tableName, sId = "") {

    item._id = mongojs.ObjectId(item._id);
    return new Promise((res, rej) => {
        db.collection(tableName + sId).findOne(item, (err, doc) => {
            res(doc);
        });
    });
}

DB.prototype.getAll = (tableName, sId = "") => {

    return new Promise((res, rej) => {
        db.collection(tableName + sId).find({}, (err, doc) => {
            res(doc);
        });
    });
}


module.exports = DB;