const mongojs = require('mongojs');
const config = require("../config/database");


let db;
// let sId = "";
// function DB(schoolId) {
function DB() {
    // console.log(schoolId)
    // if (schoolId)
    //     sId = schoolId;
    // else
    //     db = "";
    // db = mongojs(config.database + mongojs.ObjectId(schoolId));
    // else
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