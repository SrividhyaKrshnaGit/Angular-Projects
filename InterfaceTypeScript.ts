interface myInterface {
    s: number ;
    t:String;
    myFunc();
}
class A implements myInterface{
    s:number;
    t:String;
    constructor(s:number,t:String){
      this.s=s;
      this.t=t;
    }
    myFunc(){
        console.log("The interface implemnting class "+this.s+" " +this.t);
    }
}

let o=new A(1,"String value");
o.myFunc();