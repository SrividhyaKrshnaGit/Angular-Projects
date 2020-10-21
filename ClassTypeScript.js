var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyClass = /** @class */ (function () {
    function MyClass(k) {
        this.j = k;
    }
    MyClass.prototype.display = function () {
        return ("The number is " + this.j);
    };
    return MyClass;
}());
var myObj = new MyClass(6);
console.log(myObj.j);
console.log(myObj.display());
var Parent = /** @class */ (function () {
    function Parent(k) {
        this.l = k;
    }
    return Parent;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child(l, k) {
        var _this = _super.call(this, k) || this;
        _this.m = l;
        return _this;
    }
    child.prototype.value = function () {
        console.log("The vlue of parent is " + this.l + " The value of child is " + this.m);
    };
    return child;
}(Parent));
var childObj = new child(12, 23);
childObj.value();
