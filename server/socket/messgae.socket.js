let io;
const DB = require("../db/db");
class MessageSocket {
    constructor() {

        this.socket = [];
        this.socket["message"] = [];
    }

    addSocket(id, type) {
        io
            .of("/" + type + "/" + id)
            .on("connection", (socket) => {
                this.socket[type][id] = socket;
                socket.emit("connect", id + " connect!");
            });

    }

    sendMessage(message, con, ids) {
        ids.forEach(id => {
            if(this.socket["message"][id])
                this.socket["message"][id].emit("newMessage", { message: message, conversation: con });
        });
    }

    sendNotification(message, id, type) {
        id.forEach(id => {
            if(this.socket["notification"][id])
                this.socket["notification"][id].emit("newNotification", {  });
        });
    }
}
let socket;

module.exports.init = function initSocket(server) {
    socket = new MessageSocket();
    io = require('socket.io').listen(server);
    return socket;
}

module.exports.socket = socket;

