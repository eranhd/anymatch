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
var GraphComponent = (function () {
    function GraphComponent() {
        this.colors = [
            '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
            '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
            '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
            '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
            '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
            '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
            '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
            '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
            '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
            '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
        ];
        this.radius = 10;
        this.height = 300;
    }
    GraphComponent.prototype.ngOnInit = function () {
        // this.width = window.screen.width * 0.8;
        this.width = this.canvas.nativeElement.parentElement.clientWidth - 10;
        // console.log(this.canvas.nativeElement.parentElement.clientWidth)
    };
    GraphComponent.prototype.ngAfterViewInit = function () {
    };
    GraphComponent.prototype.addVertex = function (id, text, color, rangex, offsetx, rangey) {
        var p;
        if (!this.points) {
            this.points = [];
        }
        var i = Math.random() * (this.height / 10 - 4);
        i = +i.toFixed(0) + 2;
        // let j = Math.random() * (this.width / 10 - 4);
        var j = Math.random() * (rangex);
        j = +j.toFixed(0) + offsetx;
        this.points.push(new Point(j, i * 10, id, text, color));
    };
    GraphComponent.prototype.addLine = function (from, to, weight) {
        var f = this.points.find(function (res) { return res.id === from; });
        var t = this.points.find(function (res) { return res.id === to; });
        if (!this.lines)
            this.lines = [];
        this.lines.push(new Line(f, t, weight));
    };
    GraphComponent.prototype.drawVertex = function () {
        var _this = this;
        this.context = this.canvas.nativeElement.getContext("2d");
        // this.context.strokeStyle = "#FF0000";
        this.context.clearRect(0, 0, this.width, this.height);
        this.points.forEach(function (p) {
            // console.log(p)
            _this.context.fillStyle = p.color;
            _this.context.beginPath();
            _this.context.arc(p.x, p.y, 8, 0, 2 * Math.PI);
            _this.context.fill();
        });
    };
    GraphComponent.prototype.drawEdge = function () {
        var _this = this;
        this.context = this.canvas.nativeElement.getContext("2d");
        if (!this.lines)
            return;
        this.lines.forEach(function (l) {
            if (l.w >= 0 && l.b && l.a) {
                if (l.w > 0) {
                    _this.context.strokeStyle = "blue";
                    _this.context.setLineDash([]);
                }
                else {
                    _this.context.strokeStyle = "green";
                    _this.context.setLineDash([5, 15]);
                }
                _this.context.beginPath();
                _this.context.moveTo(l.a.x, l.a.y);
                _this.context.lineTo(l.b.x, l.b.y);
                _this.context.stroke();
            }
            else if (l.b && l.a) {
                _this.context.strokeStyle = "red";
                _this.context.setLineDash([2, 15]);
                _this.context.beginPath();
                // for(let i = 0; i < 20; i++){
                _this.context.moveTo(l.a.x, l.a.y);
                _this.context.lineTo(l.b.x, l.b.y);
                _this.context.stroke();
            }
            if (l.b) {
                _this.context.rect(l.b.x, l.b.y, 3, 3);
                _this.context.stroke();
            }
        });
    };
    GraphComponent.prototype.addGroup = function (v) {
        var _this = this;
        v.forEach(function (res) {
            // console.log(res.edges)
            if (res.edges)
                res.edges.forEach(function (e) {
                    if (v.find(function (r) { return r.id == e.to; }))
                        _this.addLine(res.id, e.to, e.weight);
                    else if (e.weight < 0)
                        _this.addLine(res.id, e.to, e.weight);
                    else {
                        console.log(e);
                        _this.addLine(res.id, e.to, 0);
                    }
                });
        });
    };
    GraphComponent.prototype.ngOnChanges = function (data) {
        var _this = this;
        console.log(this.graph);
        if (this.graph) {
            // console.log("dd");
            var rangex_1 = this.width / this.graph.length;
            this.graph.forEach(function (g, i) {
                g.forEach(function (res) {
                    _this.addVertex(res.id, res._text, _this.colors[i], rangex_1, rangex_1 * i);
                });
            });
            this.graph.forEach(function (g) {
                _this.addGroup(g);
            });
            this.drawVertex();
            this.drawEdge();
        }
    };
    GraphComponent.prototype.getMousePos = function (evt) {
        var rect = this.canvas.nativeElement.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };
    GraphComponent.prototype.click = function (e) {
    };
    GraphComponent.prototype.selectPosition = function (e) {
        var pos = this.getMousePos(e);
        if (this.points) {
            this.pointToCahnge = this.getVertexByPosition(pos);
        }
    };
    GraphComponent.prototype.getVertexByPosition = function (pos) {
        var _this = this;
        return this.points.find(function (res) {
            return Math.abs(pos.x - res.x) < _this.radius && Math.abs(pos.y - res.y) < _this.radius;
        });
    };
    GraphComponent.prototype.changePosotion = function (e) {
        var pos = this.getMousePos(e);
        if (this.points) {
            this.drawVertex();
            this.drawEdge();
        }
        if (this.points) {
            var u = this.getVertexByPosition(pos);
            // console.log(u)
            if (u)
                this.context.fillText(u["text"], pos.x, pos.y - 10);
        }
        if (this.pointToCahnge) {
            // console.log(this.pointToCahnge)
            this.pointToCahnge.x = pos.x;
            this.pointToCahnge.y = pos.y;
        }
    };
    __decorate([
        core_1.ViewChild("can"),
        __metadata("design:type", core_1.ElementRef)
    ], GraphComponent.prototype, "canvas", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GraphComponent.prototype, "graph", void 0);
    GraphComponent = __decorate([
        core_1.Component({
            selector: 'app-graph',
            templateUrl: './graph.component.html',
            styleUrls: ['./graph.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], GraphComponent);
    return GraphComponent;
}());
exports.GraphComponent = GraphComponent;
var Point = (function () {
    function Point(x, y, id, text, color) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.text = text;
        this.color = color;
    }
    return Point;
}());
var Line = (function () {
    function Line(a, b, w) {
        this.a = a;
        this.b = b;
        this.w = w;
    }
    return Line;
}());
//# sourceMappingURL=graph.component.js.map