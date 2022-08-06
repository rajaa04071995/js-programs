const cars = ["BMW" , "VOLVO" , "TOYOTA"];//better declare an array in const variable because const cannot redeclare it
const model = new Array(2017,2018,2000,2022);
console.log(cars[1]);//access array value using their index number

cars[1] = "BENZ";//change the value of array using index number
console.log(cars[1]);

//get all values from an array
for(let i=0; i<cars.length; i++){
    console.log("return form for loop " + cars[i]);
}

cars.forEach(myFun)//calls a function for each element in an array

function myFun(x){
    console.log("return from function declaration " + x);
}

cars.forEach(myArrFn=(x)=> console.log("return from arrow function " + x));//arrow function


console.log(Array.isArray(cars));//to check whether the variable is array or not


//Array Methods

let strcars = cars.toString();//convert array into a string and seperated by comma (,)
console.log(typeof(strcars));

let joinstr = cars.join("*");//convert array into string and seperated using specified string
console.log(joinstr);


cars.push("TATA","SUZKI");//push element in rear end of an array
console.log(cars);
cars.pop();//pop element from rear end of an array
console.log(cars);


cars.unshift("JEEP");//add element at the front end of an array..index number will be incremented to forward direction
console.log(cars);
cars.shift();//delete element from the front end of an array..index will be decremented backward direction
console.log(cars);


delete cars[0];//delete the element but the index is not updated...the value remains undefined
console.log(cars);


const concatval = cars.concat(model);//creates new array by merging 2 or more arrays
console.log(concatval);

/*remove element from the specified index(2),
number of element to be removed is(1) and the value to be inserted into an array at removed position
THE CHANGES WILL BE DONE AT THE SOURCE ARRAY*/
const splicearr = concatval.splice(2,1,"JEEP");

console.log(splicearr);//return only the removed element
console.log(concatval);

/*cut elements from an array and stored into a specified variable as array
the source array will not get affected */
const slicedarr = concatval.slice(4,6);
console.log(slicedarr);


console.log(concatval.sort());//sort all array elements in ascending order and it will affect the source array
console.log(concatval);


console.log(concatval.reverse());//reverse an array of source array
console.log(concatval);

//for Each(), map(), filter(), reduce(), every(), some(), find() all are work on calling function for perform some actions

concatval.forEach(myFun1);//call function for each value in an array

function myFun1(x){
    console.log(x);
}

const arr = [4,25,16,27];
/*create new array in performing function of each element in an source array 
the result wont affect the source array */
const newArr = arr.map(myFun2);
function myFun2(x){
    return x+10;//add 10 to each value in an array
}
console.log(newArr);
console.log(arr);


const filterArr = arr.filter(myFun3);//call a function for each element and return those elements which passes the test inside function
function myFun3(x){
    return x>10;
}
console.log(filterArr);



/*every() checkes if all array values pass a test.
return true or false accordingly */
let pass = arr.every(myFun5);
function myFun5(x){
    return x>10;
}
console.log(pass);


/* some() method checks if any one of the element passes the test
return boolean value according to the test */
let somepass = arr.some(myFun6)
function myFun6(x){
    return x>10;
}
console.log(somepass);


/* find() method return the first element passes the test */
let findele = arr.find(myFun7);
function myFun7(x){
    return x>10;
}
console.log(findele);


//find index of first element of an array which passes the test
let findindex = arr.findIndex(myFun8);
function myFun8(x){
    return x<10;
}
console.log(findindex);


//reduce array element into single value
const reducearr = arr.reduce(myFun4);
/* function uses 2 parameter for receiving value from the source array
 and to get calculated value from reducearr variable */
function myFun4(total,x){

    return x+total;
}
console.log(reducearr);



console.log(arr.indexOf(16));//return the index of specified value in an array..return -1 if element not found



console.log(arr.lastIndexOf(16));//return index of last occurance of specified element



/* Array.from() method is used to convert object property to array element */
let newobj ={model:"2013",service:"good"};
let newarr1 = Array.from(newobj.service);
console.log(newarr1);


//return key index of an array
let key = arr.keys();
for(let x of key){
    console.log(x);
}


//return key index and also its element of an array
let entry = arr.entries();
for(let x of entry){
    console.log(x);
}


console.log(arr.includes(27));//check whether the element is present in an array or not,return boolean value

