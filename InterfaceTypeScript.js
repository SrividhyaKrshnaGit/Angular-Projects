var A = /** @class */ (function () {
    function A(s, t) {
        this.s = s;
        this.t = t;
    }
    A.prototype.myFunc = function () {
        console.log("The interface implemnting class " + this.s + " " + this.t);
    };
    return A;
}());
var o = new A(1, "String value");
o.myFunc();
