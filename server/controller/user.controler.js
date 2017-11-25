//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const user = require("../schema/user.schema");
const passport = require('passport');
require('../config/passport')(passport); // pass passport for configuration
const DB = require("../db/db");
const mongojs = require('mongojs');



const collection = "users";

router.post('/all/', (req, res, next) => {
    let db = new DB();
    // console.log({ schoolId: mongojs.ObjectId(req.user.schoolId) })
    // console.log("aa: " + mongojs.ObjectId(req.user[0].schoolId))
    db.find(collection, { schoolId: req.user[0].schoolId }).then(doc => {
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


module.exports = router;