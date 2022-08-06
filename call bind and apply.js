//call() : an object can use a method belonging to another object
//we can pass arguments seperately with call() method

const person = {
    fullName : function(city,country){
        return this.fName +" "+ this.lName + " " + city + " " + country;//this refers to any object that calls(person1 object)
    }
};

const person1 = {
    fName: "john",
    lName: "doe"
};

const student = {
    fName: "rajaa",
    lName: "mohamed"
};

console.log("return from call() method: "+person.fullName.call(person1,"madurai","india"));//person1 use the method fullName of person object
console.log(person.fullName.call(student,"madurai","india"));//code reusability(student obj use fullName method of person obj)



//apply(): works same as call method that an object can use the method of another object
// the only difference is that call() method will pass arguments as seperate value whereas apply() pass argument as array


console.log("return from apply() method: "+person.fullName.apply(person1,["madurai","india"]));

//bind borrow method from another object and return a new function
const bindFun = person.fullName.bind(person1,"madurai","india");
console.log(bindFun());