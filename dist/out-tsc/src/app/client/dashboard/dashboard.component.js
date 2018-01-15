"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var service_1 = require("../../service");
var models_1 = require("../../models");
var DashboardComponent = (function () {
    function DashboardComponent(schoolService, authService, layerService, classService, userService) {
        var _this = this;
        this.schoolService = schoolService;
        this.authService = authService;
        this.layerService = layerService;
        this.classService = classService;
        this.userService = userService;
        this._swaps = [];
        this._swapsView = [];
        this.feedback = [
            "האם שובצת עם תלמידים שרצית להשתבץ?",
            "האם היית משנה את השיבוץ?",
            "האם תהליך בחירת התלמידים היה קל?"
        ];
        this.grade = [1, 2, 3, 4, 5];
        this.result = [3, 3, 3];
        this.headerCards = [
            new models_1.HeaderCard("group", "מספר תלמידים בשכבה", this.userService.num, "#ff7676"),
            new models_1.HeaderCard("done_all", "מספר התלמידים שבחרו", this.layerService.num, "#796aee"),
            new models_1.HeaderCard("sync", "בחירה פתוחה", null, "#54e69d")
        ];
        this._layer = this.layerService.getLayerById(this.authService.getUser().layerId);
        this.groups = layerService.getLayerById(this.authService.getUser().layerId).groups;
        this.userService.users.subscribe(function (users) {
            if (users) {
                if (users[0].fname)
                    _this._students = users.sort(function (a, b) {
                        return a.fname.localeCompare(b.fname);
                    });
                else
                    _this._students = users;
            }
        });
        this._swaps = this.layerService.swaps;
        // console.log(this._swaps)
        if (this._swaps.length == 0) {
            this.layerService.allSwaps(this.authService.id).then(function (s) {
                // console.log(s);
                _this._swaps = s;
                _this.getSwaps();
            });
        }
    }
    DashboardComponent.prototype.swapResponse = function (id, status) {
        var s = this._swaps.find(function (s) { return s._id == id; });
        this.layerService.swapResponse(s, status);
    };
    Object.defineProperty(DashboardComponent.prototype, "positive", {
        get: function () {
            var _this = this;
            return this._students.filter(function (res) {
                return _this.authService.getUser().positivePrefer.includes(res._id);
            });
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.getSwaps = function () {
        var _this = this;
        this._swapsView = this._swaps.map(function (s) {
            var u = _this.userService.getUserById(s.from);
            var g = 0;
            _this.groups.forEach(function (group, i) {
                if (group.includes(function (ids) { return s.to == ids; }))
                    g = i;
            });
            return {
                name: u.fname + " " + u.lname,
                class: g,
                id: s._id
            };
        });
        return this._swapsView;
    };
    Object.defineProperty(DashboardComponent.prototype, "swaps", {
        get: function () {
            return this._swapsView ? this._swapsView : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "negative", {
        get: function () {
            var _this = this;
            return this._students.filter(function (res) {
                return _this.authService.getUser().negativePrefer.includes(res._id);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "timer", {
        get: function () {
            var d = new Date();
            // console.log(d.toLocaleDateString())
            if (this._layer)
                if (this._layer.lockTime) {
                    var d2 = new Date(this._layer.lockTime);
                    // console.log(d2.toLocaleDateString())
                    return d2.getFullYear() <= d.getFullYear() && d2.getMonth() <= d.getMonth() && d2.getDate() <= d.getDate() ? null : d2;
                }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [service_1.SchoolService,
            service_1.AuthService,
            service_1.LayerService,
            service_1.ClassService,
            service_1.UserService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map