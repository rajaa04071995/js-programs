var newvariable = "global variable";
function newfun(){
    const newconst = "function variable";
    console.log(newvariable);
    function innerFun(){
        console.log("access variable of parent function in inner function: "+newconst);//access the variable of parent function in inner function
    }
    innerFun();//invoke function inside another function
    
}
newfun();

//concept of closure: variable declared in outer block can be accessed from inner block
{
    let xyz="block variable";
    var abc = "variable with var keyword can acces outside the block";
    {
        console.log(xyz);
    }
}
//console.log(xyz);
console.log(abc);



//variable hoisting
/* we can initialize the variable before declaring it...
as the default behaviour of javascript is that js moves all the declarations to the top before executing the code */
hoisting = "hoisting variable";
console.log(hoisting);

var hoisting;


//function hoisting
/* we can hoist the function declarations
i.e we can call a function before declaration...hoisting cannot be work in functin expression */
myFun();


function myFun(){
    console.log("hoisting function");
}
