const mongojs = require('mongojs');
const config = require("../config/database");


// module.exports = (schoolId, tableName) => {
//     const db = mongojs(config.database + schoolId, [tableName]);

//     let save = (item) => {
//         return new Promise((res, rej) => {
//             db.insert(item, null, (err, doc) => {
//                 res(doc);
//             });
//         });
//     }
// }
var db
function DB(schoolId) {
    db = mongojs(config.database + schoolId)//, [tableName]);

}


DB.prototype.save = function(item, tableName) {
    console.log(db);
    return new Promise((res, rej) => {
        db.collection(tableName).insert(item, null, (err, doc) => {
            res(doc);
        });
    });
}


module.exports = DB;