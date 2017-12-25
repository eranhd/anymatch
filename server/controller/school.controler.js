const express = require('express');
const router = express.Router();
const school = require("../schema/school.schema");
const DB = require("../db/db");



router.post('/all/', (req, res, next) => {
    let db = new DB();
    db.getAll("data").then(s => {
        res.send(s);
    });
});



router.post('/create/', (req, res, next) => {
    let anyDb = new DB();

    anyDb.save(req.body, "schools").then(school => {
        // console.log(school);
        let db = new DB();
        db.save(school, "data", school._id).then(s => {
            res.send(school);
        })

    });
});

router.post("/getById/", (req, res, next) => {

    let db = new DB();
    // console.log(req.body._id);
    db.findOne(req.body, "data", req.body._id).then(resolve => {
        console.log(resolve);
        res.send(resolve);
    });
});

router.post("/update/", (req, res, next) => {
    // console.log(req.body);
    let db = new DB();
    db.save(req.body, "data", req.body._id).then(resolve => {
        // console.log("in saveee");
        // console.log(res olve);
        res.send(resolve);
    });
});


router.delete('/:id', (req, res, next) => {
    res.send("DELETE");

})

module.exports = router;