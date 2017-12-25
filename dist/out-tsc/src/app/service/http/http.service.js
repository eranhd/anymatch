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
var http_1 = require("@angular/http");
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.path = "http://localhost:3000/";
        this.header = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.header });
    }
    HttpService.prototype.post = function (url, body, options) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.http.post(_this.path + url, body, _this.options).subscribe(function (response) {
                res(response.json());
            });
        });
    };
    HttpService.prototype.get = function (url, options) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.http.get(_this.path + url, _this.options).subscribe(function (response) {
                res(response.json());
            });
        });
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map