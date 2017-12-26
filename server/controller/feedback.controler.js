const express = require('express');
const router = express.Router();
const DB = require("../db/db");

const collection = "feedback";


router.post('/all/', (req, res, next) => {
    if (req.user[0].permission === "student")
        res.send({ success: false, reasone: "denied!" });
    let db = new DB();
    let query = {};
    query.schoolId = req.user[0].schoolId;
    db.find(collection, "", query).then(doc => {
        let arr = [];
        doc.forEach(e => {
            e.result.forEach((r, i) => {
                arr[i] ? arr[i] += r : arr[i] = r;
            });
        });
        arr.map((r, i) => {
            arr[i] /= doc.length;
        })
        res.send({ results: arr });
    });
});


router.post("/create/", (req, res, next) => {
    let db = new DB();
    db.save(req.body.feedback, collection).then(resolve => {
        res.send(resolve);
    });

});


module.exports = router;