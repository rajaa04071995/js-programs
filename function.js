//function declaration
function myFunDec(a,b){// parameter received from function call and stored in a,b
    let c = a + b ;
    return "myFunDec result " + c; //return value to the caller....the funtion will stop execute in return statement...
    console.log("hi"); //this will not be executed as already functoin execution has stoped in return statement
}

console.log(myFunDec(5,5));// 5,5 arguments passed to the function myFunDec

//function expression or anonymous funtion because a function without name
const myFunExp = function(a,b){
    let c = a + b ;
    return "myFunExp result " + c;
}

console.log(myFunExp(7,9));//the function gets called by using its variable

//this is a self invoking function...function call itself by using paranthisis "()" after the function..we canot pass any parameters
(function(){
    let a = 8, b = 16;
    let c = a + b;
    console.log("self invoking function " + c);
})();


//arrow function... function is called using variable it assigned
const myArrowFun = (a,b) => a+b;

console.log("myArrowFun result " + myArrowFun(8,3));

//argument object.. this is a build in object get argument from the function call as object
function arrObj(){
    var val="";
    for(let i=0; i<arguments.length; i++){
        val += arguments[i] + ",";
    }
    return val;
}

console.log(arrObj(4,8,28,"hello"));


