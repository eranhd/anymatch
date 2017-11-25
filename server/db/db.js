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
    console.log("in save")
    console.log(item);
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
                // console.log(item)
                db.collection(tableName).update({ _id: mongojs.ObjectId(item._id) }, item, (err, doc) => {
                    console.log("in save 2/n/n/n")
                    console.log(doc);
                    db.collection(tableName).findOne({ _id: mongojs.ObjectId(item._id) }, (err, doc) => {
                        res(doc);
                    });

                });
            }
        });

    });
}

DB.prototype.find = function (tableName, query, projection) {
    // console.log(query)
    // console.log(tableName)
    
    return new Promise((res, rej) => {
        db.collection(tableName).find( query, projection, (err, doc) => {
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