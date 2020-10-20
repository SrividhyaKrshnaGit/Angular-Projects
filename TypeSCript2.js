function myFunction() {
    for (var i = 1; i <= 2; i++) {
        console.log("Typescript let and var difference");
    }
    console.log("Final i value " + i);
}
myFunction();
//Type Assertion specifying the type in to ways
var myvar;
var myvar2 = myvar;
var my = myvar;
function product(x, y) {
    return x * y;
}
product(2, 3);
//Anonymous Function
var w = function (x, y) {
    return x * y;
};
console.log(w(4, 5));
var z = 3;
function threeProduct(x, y) {
    return x * y * z;
}
console.log(threeProduct(3, 5));
var ex = function (a) { return console.log(a); };
