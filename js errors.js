//system defined error and handling method
try{
    console.log("hi");
    consssole.log("hello");
    
}
catch(err){
    console.log(err.name+": "+err.message);
}

//used to handle error with customised error
const x = 6;
try{
    if(x == "") throw "empty";//we can create custom error using throw keyword
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
}
catch(err){
    console.log(err);
}
finally{
    console.log("something wrong");//defines a code block to run regarless of the result
}

