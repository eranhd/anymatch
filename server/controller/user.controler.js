//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const user = require("../schema/user.schema");
const passport = require('passport');
require('../config/passport')(passport); // pass passport for configuration
const DB = require("../db/db");
const mongojs = require('mongojs');
const upload = require("../config/upload");


const collection = "users";

router.post('/all/', (req, res, next) => {
    let db = new DB();
    // console.log({ schoolId: mongojs.ObjectId(req.user.schoolId) })
    // console.log("aa: " + mongojs.ObjectId(req.user[0].schoolId))\\
    // console.log(req.user[0].permission + "ppppermision\n\n\n\n")
    let projection = {};
    let query = { schoolId: req.user[0].schoolId }
    if (req.user[0].permission === "student") {
        projection = { fname: "fname", lname: "lname" };
        query.layerId = req.user[0].layerId;
        // console.log(query)
    }
    db.find(collection, query, projection).then(doc => {
        if (doc) {

            res.send(doc);
        }
        else
            res.send("failed");

    });
});
//POST HTTP method to /bucketlist

router.post('/', (req, res, next) => {
    res.send("POST");

});

router.post("/update/", (req, res, next) => {
    // let db = new DB();

    // console.log(req.body);
    if (!req.body.isLogin)
        req.body.isLogin = false;
    user.update(req.body, (err, doc) => {
        if (err)
            res.json({ success: false, message: `Failed to update user. Error: ${err}` });
        else
            res.write(JSON.stringify({ success: true, user: doc }, null, 2));
        res.end();
    });
});

router.post("/changePassword/", (req, res, next) => {
    let u = new user(req.body.user);
    if (u.validPassword(req.body.password)) {
        u.isLogin = true;
        console.log(u)
        u.password = u.generateHash(req.body.newPassword);
        user.update(u, (err, doc) => {
            if (err)
                res.json({ success: false, message: `Failed to update user. Error: ${err}` });
            else
                res.write(JSON.stringify({ success: true, user: doc }, null, 2));
            res.end();
        });

    }
    else {
        res.send({ code: 1, success: false });
    }

});

router.post('/create/', (req, res, next) => {


    let user = req.body;
    user.password = user.username;
    user.permmision = "student";
    req.body = user;

    passport.authenticate('local-signup', (err, user, info) => {
        // console.log(info);
        if (err) {
            return next(err); // will generate a 500 error
        }
        if (!user) {
            return res.send({ success: false, message: 'authentication failed' });
        }
        req.login(user, loginErr => {
            if (loginErr) {
                return next(loginErr);
            }

            return res.send({ success: true, user: user, message: 'authentication succeeded' });
        });
    })(req, res, next);
});

router.post('/upload/', (req, res) => {

    // res.send('File uploaded!');
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    let sampleFile = req.files.uploadFile;
    let name = req.body.name + ".xlsx";

    if (req.files)
        console.log(req.files.uploadFile);
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(upload.xlsx + name, (err) => {

        if (err){
            console.log(err)
            return res.status(500).send(err);
        }
        console.log("done");
        res.send('File uploaded!');
    });
});


module.exports = router;