class MyClass{
    j:number;
    constructor(k:number){
        this.j=k;
    }
    display(){
        return("The number is "+this.j);
    }
}

let myObj = new MyClass(6);
console.log(myObj.j);
console.log(myObj.display());


class Parent{
    l:number;
    constructor(k:number){
        this.l=k;
    }
}
class child extends Parent{
    m:number;
    constructor(l:number,k:number){
    super(k);
    this.m=l;
    }
    value(){
        console.log("The vlue of parent is "+this.l+" The value of child is "+this.m);
    }
}

let childObj = new child(12,23);
childObj.value();