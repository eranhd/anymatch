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
var http_service_1 = require("../http/http.service");
var controlerService_model_1 = require("../controlerService.model");
var auth_service_1 = require("../auth/auth.service");
var rxjs_1 = require("rxjs");
var LayerService = (function (_super) {
    __extends(LayerService, _super);
    function LayerService(http, authService) {
        var _this = _super.call(this, "layer", http) || this;
        _this.authService = authService;
        if (!_this.obLayers)
            _this.initObservable([]);
        return _this;
    }
    LayerService.prototype.initObservable = function (data) {
        var _this = this;
        this.obLayers = new rxjs_1.Observable(function (o) {
            _this.ob = o;
            if (_this._layers)
                _this.ob.next(_this._layers);
            else
                o.next(data);
        });
    };
    LayerService.prototype.getAllLayers = function (schoolId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getAll(schoolId)];
                    case 1:
                        _a._layers = _b.sent();
                        this._layers = this._layers
                            .map(function (res, index) {
                            res["position"] = index;
                            if (res.isActive == undefined) {
                                res.isActive = true;
                                _this.updateLayer(res);
                            }
                            return res;
                        }).filter(function (res) { return res.isActive; });
                        if (this.ob)
                            this.ob.next(this._layers);
                        return [2 /*return*/];
                }
            });
        });
    };
    LayerService.prototype.addLayer = function (layer, schoolId) {
        var _this = this;
        layer.isActive = true;
        return new Promise(function (res, rej) {
            _this.create({ schoolId: schoolId, layer: layer })
                .then(function (l) {
                _this.getAllLayers(schoolId).then(function (_) {
                    if (_this.ob)
                        _this.ob.next(_this._layers);
                    res(l);
                });
            });
        });
    };
    Object.defineProperty(LayerService.prototype, "layers", {
        get: function () {
            if (this.ob)
                this.ob.next(this._layers ? this._layers : []);
            return this.obLayers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerService.prototype, "num", {
        get: function () {
            return this._layers ? this._layers.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    LayerService.prototype.getIdByName = function (name) {
        for (var _i = 0, _a = this._layers; _i < _a.length; _i++) {
            var l = _a[_i];
            if (l.name === name)
                return l._id;
        }
        return null;
    };
    LayerService.prototype.getLayerById = function (id) {
        return this._layers.find(function (res) {
            return res._id == id;
        });
    };
    LayerService.prototype.addClass = function (id, layerId) {
        var l = this.getLayerById(layerId);
        if (!l.classesId)
            l.classesId = [];
        l.classesId.push(id);
        this.updateLayer(l);
    };
    LayerService.prototype.updateLayer = function (l) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.update({ layer: l }).then(function (layer) {
                _this._layers = _this._layers.map(function (r) {
                    if (layer._id === r._id)
                        return layer;
                    return r;
                });
                res(true);
            });
        });
    };
    LayerService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var layer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._layers)
                            return [2 /*return*/];
                        layer = null;
                        if (confirm("מחיקה זו לא תאפשר לשחזר את הנתונים. האם למחקו?")) {
                            this._layers = this._layers.filter(function (l) {
                                if (l._id == id) {
                                    l.isActive = false;
                                    layer = l;
                                }
                                return l._id != id;
                            });
                        }
                        return [4 /*yield*/, this.updateLayer(layer)];
                    case 1:
                        _a.sent();
                        this.ob.next(this._layers ? this._layers : []);
                        return [2 /*return*/, true];
                }
            });
        });
    };
    LayerService.prototype.getGraph = function (id, classes) {
        return this.http.post("graph/graph", { layerId: id, groups: classes });
    };
    LayerService.prototype.saveMatch = function (groups, layerId) {
        var _this = this;
        var arr = [];
        if (groups) {
            groups.forEach(function (a) {
                var group = [];
                a.forEach(function (v) {
                    group.push(v.id);
                });
                arr.push(group);
            });
            var l_1 = this.getLayerById(layerId);
            l_1.groups = arr;
            return new Promise(function (res, rej) {
                _this.updateLayer(l_1).then(function (layer) {
                    res(true);
                });
            });
        }
    };
    LayerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService, auth_service_1.AuthService])
    ], LayerService);
    return LayerService;
}(controlerService_model_1.ControlerService));
exports.LayerService = LayerService;
//# sourceMappingURL=layer.service.js.map