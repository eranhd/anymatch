const express = require('express');
const router = express.Router();
const DB = require("../db/db");
const socketMessage = require("../socket/messgae.socket");
const collection = "conversations";


router.post('/all/', (req, res, next) => {
    let db = new DB();
    db.find(collection, "", { participants: req.body.id }).then(doc => {
        res.send(doc);
    });
});


router.post("/create/", (req, res, next) => {
    let db = new DB();
    db.save(req.body.conversation, collection).then(resolve => {
        socket.sendMessage(null, resolve, resolve.participants.filter(u => u != req.user[0].id));
        res.send(resolve);
    });

});

router.post("/pushToArray/", async (req, res, next) => {
    let db = new DB();
    let item = req.body.item;
    let _id = req.body._id;
    let arrayName = req.body.arrayName;
    await db.pushToArray(item, _id, arrayName, collection);

    let con = await db.findOne({ _id: _id }, collection)
    socket.sendMessage(item, con, con.participants.filter(u => u != req.user[0].id));
    res.send({ success: true });
});

router.post("/read/", async (req, res, next) => {
    let db = new DB();
    let _id = req.body._id;
    let con = await db.findOne({ _id: _id }, collection)
    con.messages[0].isRead[req.user[0]._id] = true;
    await db.save(con, collection);
    res.send({ success: true });
})

let socket
module.exports = router;
module.exports.setSocket = function setSocket(s) {
    socket = s;
}