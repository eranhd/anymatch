const mongojs = require('mongojs');
const config = require("../config/database");


var db
function DB(schoolId) {
    // console.log(schoolId)
    if (schoolId)
        db = mongojs(config.database + mongojs.ObjectId(schoolId));
    else
        db = mongojs(config.database + "anymatch");

}


DB.prototype.save = function (item, tableName) {
    return new Promise((res, rej) => {
        let id = mongojs.ObjectId(item._id);
        delete item._id
        db.collection(tableName).update({ _id: id }, item, { upsert: true }, (err, doc) => {
            item._id = id.toString()
            res(item);
        })
    });
}

DB.prototype.find = function (tableName, query, projection) {
    // console.log(query)
    // console.log(tableName)

    return new Promise((res, rej) => {
        db.collection(tableName).find(query, projection, (err, doc) => {
            res(doc);
        });
    });
}

DB.prototype.findOne = function (item, tableName) {

    item._id = mongojs.ObjectId(item._id);
    return new Promise((res, rej) => {
        db.collection(tableName).findOne(item, (err, doc) => {
            res(doc);
        });
    });
}

DB.prototype.getAll = (tableName) => {

    return new Promise((res, rej) => {
        db.collection(tableName).find({}, (err, doc) => {
            res(doc);
        });
    });
}


module.exports = DB;