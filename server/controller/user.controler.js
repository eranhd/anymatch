//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const user = require("../schema/user.schema");
const passport = require('passport');
require('../config/passport')(passport); // pass passport for configuration
const DB = require("../db/db");
const mongojs = require('mongojs');
const upload = require("../config/upload");
const convert = require("../services/xlsxToJson.service");



const collection = "users";

router.post('/all/', (req, res, next) => {
    if (!req.user) {
        res.status(401).send({ success: false, message: "auth flase" })
        return 
    }
    let db = new DB();
    let projection = {};
    let query = { schoolId: req.user[0].schoolId }
    if (req.user[0].permission === "student") {
        projection = { fname: "fname", lname: "lname" };
        query.layerId = req.user[0].layerId;

    }
    else if (req.user[0].permission === "charge") {
        query.layerId = req.user[0].layerId;
    }
    db.find(collection, "", query, projection).then(doc => {
        if (doc) {
            if (req.user[0].permission === "student") {
                query.layerId = { $exists: false };
                db.find(collection, "", query, projection).then(d => {
                    if (!d)
                        d = []
                    doc.forEach(u => {
                        d.push(u)
                    })
                    res.send(d);
                })
            }
            else if (req.user[0].permission === "charge") {
                query.layerId = { $exists: false };
                db.find(collection, "", query, projection).then(d => {
                    if (!d)
                        d = []
                    doc.forEach(u => {
                        d.push(u)
                    })
                    res.send(d);
                })
            }

            else
                res.send(doc);
        }
        else
            res.send("failed");

    });
});


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
        else {
            user.findById(doc._id, (err, u) => {
                res.write(JSON.stringify({ success: true, user: u[0] }, null, 2));
                res.end();
            })

        }

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
    create(req, res, next);
});

let create = (req, res, next, user) => {


    console.log(req.body)
    if (!user) {
        let user = req.body;
        user.password = user.username;
        user.permmision = "student";
        req.body = user;
    }
    else {
        req.body = user;
    }

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
}

router.post('/upload/', (req, res, next) => {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
    let sampleFile = req.files.uploadFile;

    let d = new Date();
    let name = d.getTime() + req.user[0].username;
    sampleFile.mv(upload.xlsx + name + ".xlsx", (err) => {
        if (err) {
            console.log(err)
            return res.status(500).send(err);
        }
        convert.convert(upload.xlsx + name + ".xlsx", upload.json + name + ".json").then(json => {
            let db = new DB(req.user[0].schoolId);
            db.save({ url: upload.json + name + ".json", des: "user list" }, "files").then(r => {
                res.send(json);
            });

        });

    });


});

router.post('/addOperation/', async (req, res, next) => {
    let u = new user(req.body.user);
    i.addOperation(u, req.body.operation, (err, doc) => {
        if (err)
            res.json({ success: false, message: `Failed to update user. Error: ${err}` });
        else
            res.write(JSON.stringify({ success: true, user: doc }, null, 2));
        res.end();
    })
})




module.exports = router;