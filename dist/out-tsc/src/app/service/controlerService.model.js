"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("socket.io-client");
var rxjs_1 = require("rxjs");
var ControlerService = (function () {
    function ControlerService(path, http) {
        this.http = http;
        this.CREATE = "create";
        this.ALL = "all";
        this.UPDATE = "update";
        this.GETBYID = "getById";
        this.PUSHTOARRAY = "pushToArray";
        this.path = path + "/";
        this.socketReplay = new rxjs_1.ReplaySubject();
    }
    ControlerService.prototype.connectToSocket = function (socket, event) {
        var _this = this;
        var s = io.connect(this.http.path + socket);
        console.log(s);
        s
            .on("connect", function () {
            console.log("connect to " + socket);
        });
        s
            .on((event), function (data) {
            console.log("new message");
            _this.socketReplay.next({ data: data, event: event });
        });
        s
            .on("disconnect", function () {
            console.log("disconnect");
        });
    };
    ControlerService.prototype.getAll = function (id) {
        return this.http.post(this.path + this.ALL, { id: id });
    };
    ControlerService.prototype.update = function (item) {
        return this.http.post(this.path + this.UPDATE, item);
    };
    ControlerService.prototype.create = function (item) {
        return this.http.post(this.path + this.CREATE, item);
    };
    ControlerService.prototype.getById = function (id) {
        var temp = { _id: id };
        return this.http.post(this.path + this.GETBYID, temp);
    };
    ControlerService.prototype.pushToArray = function (item, id, arrayName) {
        var temp = {
            _id: id,
            item: item,
            arrayName: arrayName
        };
        return this.http.post(this.path + this.PUSHTOARRAY, temp);
    };
    return ControlerService;
}());
exports.ControlerService = ControlerService;
//# sourceMappingURL=controlerService.model.js.map