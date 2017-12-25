const express = require('express');
const router = express.Router();
const DB = require("../db/db");
const socketMessage = require("../socket/messgae.socket");
const collection = "conversations";


router.post('/all/', (req, res, next) => {
    let db = new DB();
    db.find(collection, "",{ participants: req.body.id }).then(doc => {
        res.send(doc);
    });
});


router.post("/create/", (req, res, next) => {
    // console.log(req.body.schoolId +", "+ collection);
    let db = new DB();
    db.save(req.body.conversation, collection).then(resolve => {
        socket.sendMessage(null, resolve, resolve.participants.filter(u => u != req.user[0].id));
            // console.log(req.user[0].id)
            // console.log(u)
        //     return u != req.user[0].id
        // }));
        res.send(resolve);
    });

});

let socket
module.exports = router;
module.exports.setSocket = function setSocket(s){
    socket = s;
}