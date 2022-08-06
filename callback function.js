function callFun(a){
    console.log("sum of a and b is " + a) ;
}

function myFun(a,b,callback){
     let c = a + b;
    callback(c);
}



myFun(5, 6, callFun);


