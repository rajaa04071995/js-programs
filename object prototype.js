//prototype is a mechanism in which js object inherits features from one another

//date inherits from Date.prototype
//array inherits from Array.prototype
"use strict";
function Person(fName,lName,age){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
}


Person.prototype.nationality = "Tamil";//add property to Person constructor
const proto = new Person("john", "Doe", 28);

console.log(proto.nationality);


//recursion in JS

//function call itself untill the condition is true

function counterFun(x){
    console.log(x);
    let c = x - 1;
    if(x>0){
        counterFun(c);//function calls itself
    }
}
counterFun(5);