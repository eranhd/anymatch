//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const layer = require("../schema/layer.schema");
const DB = require("../db/db");
const swapEnum = require("../enum/swapStatus.enum");

const collection = "layers";


router.post('/all/', (req, res, next) => {
    let db = new DB();
    let query = {};
    if (req.user[0].permission === "charge") {
        query._id = req.user[0].layerId;
        db.findOne(query, collection, req.body.id).then(doc => {
            res.send([doc]);
        });
    }
    else
        db.find(collection, req.body.id).then(doc => {
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

router.post("/update/", (req, res, next) => {
    // console.log(req.body);
    let db = new DB();
    db.save(req.body.layer, collection, req.user[0].schoolId).then(resolve => {
        res.send(resolve);
    });

});


/**
 * request swap with some one.
 * swapId is the user I want to swap
 */
router.post("/swap_request/", async (req, res, next) => {
    let swapObj = {
        from: req.user[0]._id.toString(),
        to: req.body.swapId,
        status: swapEnum.swapStatus.NONE
    };

    let db = new DB();
    let doc = await db.save(swapObj, collection + "swap", req.user[0].schoolId);
    res.send(doc);
});

/**
 * get id of swap, and answer
 */
router.post("/swap_response/", async (req, res, next) => {
    let db = new DB();
    let s = req.body.swap;
    if (s.status == swapEnum.swapStatus.ACCEPT) {
        let l = await db.findOne({ _id: req.user[0].layerId }, collection, req.user[0].schoolId);
        l.groups = l.groups.map(group => {
            for (let i = 0; i < group.length; i++) {
                if (group[i] == s.from)
                    group[i] = s.to;
                else if (group[i] == s.to)
                    group[i] = s.from;
            }
            return group;
        });
        await db.save(l, collection, req.user[0].schoolId);
    }
    let doc = await db.save(req.body.swap, collection + "swap", req.user[0].schoolId);
    socket.sendNotification({
        type: "swap",
        id: doc._id.toString(),
        status: doc.status
    }, [req.user[0]._id], )
    res.send({ success: true });
});

router.post("/allSwaps/", async (req, res, next) => {
    let db = new DB();
    let doc = await db.find(collection + "swap", req.user[0].schoolId, { to: req.user[0]._id.toString(), status: swapEnum.swapStatus.NONE });
    res.send(doc);
});

let socket
module.exports = router;
module.exports.setSocket = function setSocket(s) {
    socket = s;
}