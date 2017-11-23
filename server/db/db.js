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
    // console.log(db);
    return new Promise((res, rej) => {
        db.collection(tableName).findOne({ _id: mongojs.ObjectId(item._id) }, (err, doc) => {
            // console.log(doc);
            if (!doc) {
                db.collection(tableName).insert(item, null, (err, doc) => {
                    res(doc);
                });
            }
            else {
                // console.log("in save");
                // console.log(doc);
                db.collection(tableName).update({ _id: mongojs.ObjectId(item._id) }, item, (err, doc) => {
                    // console.log(item);
                    db.collection(tableName).findOne({ _id: mongojs.ObjectId(item._id) }, (err, doc) => {
                        res(doc);
                    });

                });
            }
        });

    });
}

DB.prototype.find = function (item, tableName, query) {
    // console.log(db);
    if (item._id)
        item._id = mongojs.ObjectId(item._id);
    return new Promise((res, rej) => {
        db.collection(tableName).find(item, query, (err, doc) => {
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