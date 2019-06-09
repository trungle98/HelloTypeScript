var Point = /** @class */ (function () {
    function Point(_a, _b) {
        this.a = _a;
        this.b = _b;
    }
    Point.prototype.drawPoint = function () {
        console.log("Point is x: " + this.a + " and y: " + this.b);
    };
    return Point;
}());
var draw = new Point(1, 2);
draw.drawPoint();
