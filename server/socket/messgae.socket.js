let io;
const DB = require("../db/db");
class MessageSocket {
    constructor() {

        this.socket = [];
        this.socket["message"] = [];
    }

    addSocket(id) {
        io
            .of("/massage/" + id)
            .on("connection", (socket) => {
                this.socket["message"][id] = socket;
                socket.emit("connect", id + " connect!");
            });

    }

    sendMessage(message, con, ids) {
        ids.forEach(id => {
            if(this.socket["message"][id])
                this.socket["message"][id].emit("newMessage", { message: message, conversation: con });
        })
    }
}
let socket;

module.exports.init = function initSocket(server) {
    socket = new MessageSocket();
    io = require('socket.io').listen(server);
    // let db = new DB();
    // db.find("users").then(doc => {
    //     if (doc) {
    //         doc.forEach(u => {
    //             socket.addSocket(u._id)
    //         });
    //     }
    // });
    return socket;
}

module.exports.socket = socket;

