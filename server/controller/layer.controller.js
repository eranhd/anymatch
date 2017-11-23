//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const layer = require("../schema/layer.schema");
const DB = require("../db/db");

const collection = "layers";


router.post('/all/', (req, res, next) => {
    let db = new DB(req.body.id);
    db.getAll(collection).then(doc => {
        res.send(doc);
    });
});

//POST HTTP method to /bucketlist

router.post('/', (req, res, next) => {
    res.send("POST");

});

router.post("/create/", (req, res, next) => {
    // console.log(req.body.schoolId +", "+ collection);
    let db = new DB(req.body.schoolId);
    db.save(req.body.layer, collection).then(resolve => {
        res.send(resolve);
    });

});

router.post("/update/", (req, res, next) => {
    // console.log(req.body);
    let db = new DB(req.body.schoolId);
    db.save(req.body.layer, collection).then(resolve => {
        // console.log("in saveee");
        // console.log(res olve);
        res.send(resolve);
    });

});

//DELETE HTTP method to /bucketlist. Here, we pass in a params which is the object id.
router.delete('/:id', (req, res, next) => {
    res.send("DELETE");

})

module.exports = router;