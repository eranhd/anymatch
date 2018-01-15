let io;
const DB = require("../db/db");
class MessageSocket {
    constructor() {

        this.socket = [];
        this.socket["message"] = [];
        this.socket["notification"] = []
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
            if (this.socket["message"][id])
                this.socket["message"][id].emit("newMessage", { message: message, conversation: con });
        });
    }

    sendNotification(notification, ids) {
        ids.forEach(id => {
            if (this.socket["notification"][id]) {
                let db = new DB();
                let not = {
                    notification : notification,
                    userId: id,
                    read: false,
                    date: new Date()
                }
                db.save(not, "notification").then(d=>{
                    this.socket["notification"][id].emit("newNotification", d);
                })
                
            }
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

