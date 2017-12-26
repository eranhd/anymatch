"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../models/index");
var auth_service_1 = require("../auth/auth.service");
var user_service_1 = require("../user/user.service");
var http_service_1 = require("../http/http.service");
var controlerService_model_1 = require("../controlerService.model");
var rxjs_1 = require("rxjs");
var MessageService = (function (_super) {
    __extends(MessageService, _super);
    function MessageService(http, authService, userService) {
        var _this = _super.call(this, "message", http) || this;
        _this.authService = authService;
        _this.userService = userService;
        _this.conversations = [];
        _this._currentConversation = new rxjs_1.ReplaySubject();
        _this.numOfNewMessage = new rxjs_1.ReplaySubject();
        _this.recent = new rxjs_1.ReplaySubject();
        _this.getAllMessages().then(function (c) {
            _this.conversations = c;
            _this.numOfNewMessage.next(_this.notReadCount());
        });
        _this.connectToSocket("massage/" + _this.authService.id, "newMessage");
        _this.socketReplay.subscribe(function (res) {
            if (res["event"] == "newMessage") {
                var c = _this.getConversationById(res["data"].conversation._id);
                if (!c)
                    _this.conversations.push(res["data"].conversation);
                _this.conversations = _this.conversations.map(function (c, i) {
                    if (!c._id)
                        return res["data"].conversation;
                    else if (c._id === res["data"].conversation._id) {
                        return res["data"].conversation;
                    }
                    return c;
                });
                // console.log(this.conversations)
                if (_this.currentConversation)
                    if (_this.currentConversation._id == res["data"].conversation._id) {
                        _this.currentConversation = res["data"].conversation;
                        console.log(_this.currentConversation);
                        _this._currentConversation.next(_this.currentConversation);
                    }
            }
            _this.numOfNewMessage.next(_this.notReadCount());
        });
        return _this;
    }
    MessageService.prototype.notReadCount = function () {
        var _this = this;
        var count = 0;
        this.conversations.forEach(function (c) {
            if (c)
                count += _this.notCountMessages(c._id);
        });
        // console.log(count)
        this.recent.next(this.conversations.slice(0, this.conversations.length > 6 ? 6 : this.conversations.length));
        return count;
    };
    MessageService.prototype.notCountMessages = function (id) {
        var c = this.getConversationById(id);
        var count = 0;
        if (c)
            if (!c.messages[0].isRead[this.authService.id])
                return 1;
        return 0;
    };
    MessageService.prototype.getConversationById = function (id) {
        return this.conversations.find(function (res) { return res._id === id; });
    };
    MessageService.prototype.conversationOpen = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var c;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id)
                            return [2 /*return*/];
                        c = this.getConversationById(id);
                        if (!!c.messages[0].isRead[this.authService.id]) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http.post(this.path + "read", { _id: id })];
                    case 1:
                        _a.sent();
                        // console.log("read");
                        this.numOfNewMessage.next(this.notReadCount());
                        _a.label = 2;
                    case 2:
                        // await this.create({ conversation: c });
                        this.numOfNewMessage.next(this.notReadCount());
                        return [2 /*return*/, true];
                }
            });
        });
    };
    MessageService.prototype.sendMessage = function (conversation, message) {
        return __awaiter(this, void 0, void 0, function () {
            var m;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        m = new index_1.Message();
                        m.date = new Date();
                        m.from = this.authService.id;
                        m.text = message;
                        m.isRead[this.authService.id] = true;
                        conversation.messages.unshift(m);
                        if (!!conversation._id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.create({ conversation: conversation })];
                    case 1:
                        conversation = (_a.sent());
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.pushToArray(m, conversation._id, "messages").then(function (doc) { console.log(doc); })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        // await this.getAllMessages();
                        this.conversations = this.sortByDate();
                        return [2 /*return*/, conversation];
                }
            });
        });
    };
    MessageService.prototype.startConversationWith = function (id) {
        this.conversations = this.conversations.filter(function (c) { return c._id; });
        var c = this.conversations.find(function (con) { return con.participants.includes(id); });
        if (!c) {
            c = new index_1.Conversation();
            c.messages = [];
            c.participants = [this.authService.id, id];
            this.conversations.push(c);
        }
        this.currentConversation = c;
        return c;
    };
    MessageService.prototype.getAllMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getAll(this.authService.id)];
                    case 1:
                        _a.conversations = _b.sent();
                        this.currentConversation = this.conversations[0] ? this.conversations[0] : null;
                        if (this.conversations) {
                            this.numOfNewMessage.next(this.notReadCount());
                            return [2 /*return*/, this.sortByDate()];
                        }
                        return [2 /*return*/, []];
                }
            });
        });
    };
    MessageService.prototype.sortByDate = function () {
        return this.conversations
            .sort(function (a, b) {
            if (b.messages.length == 0)
                return -1;
            else if (a.messages.length == 0)
                return 1;
            else {
                var dateA = a.messages[0].date;
                var dateB = b.messages[0].date;
                return (dateB + "").localeCompare(dateA + "");
            }
        });
    };
    MessageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            auth_service_1.AuthService,
            user_service_1.UserService])
    ], MessageService);
    return MessageService;
}(controlerService_model_1.ControlerService));
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map