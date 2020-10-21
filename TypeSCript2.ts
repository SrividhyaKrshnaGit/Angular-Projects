function myFunction(){
    for(var i=1 ;i<=2;i++){
        console.log("Typescript let and var difference");
    }
    console.log("Final i value "+i);
}

myFunction();


//Type Assertion specifying the type in to ways
let myvar;
let myvar2:String = (<String>myvar);
let my:String = (myvar as String);


function product(x,y){
    return x*y;
}
product(2,3);

//Anonymous Function

let w = function(x,y){
    return x*y;
}
console.log(w(4,5));

let z=3;

function threeProduct(x,y){
    return x*y*z;
}
console.log(threeProduct(3,5));

let ex =(a)=>console.log(a);