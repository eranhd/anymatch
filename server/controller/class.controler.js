//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const DB = require("../db/db");

const collection = "classes";

router.post('/all/', (req, res, next) => {
    let db = new DB();
    db.getAll(collection, req.body.id).then(doc => {
        res.send(doc);
    });
});

//POST HTTP method to /bucketlist

router.post('/', (req, res, next) => {
    res.send("POST");

});

router.post("/create/", (req, res, next) => {
    // console.log(req.body.schoolId +", "+ collection);
    let db = new DB();
    db.save(req.body.layer, collection, req.body.schoolId).then(resolve => {
        res.send(resolve);
    });

});

//DELETE HTTP method to /bucketlist. Here, we pass in a params which is the object id.
router.delete('/:id', (req, res, next) => {
    res.send("DELETE");

})

module.exports = router;