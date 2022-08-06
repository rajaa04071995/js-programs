let a = "100";
let b = "10";
let c = 5;
let d = "hello";
let e = 4;
let f = 7.5624;
console.log(a+b);
console.log(b+c);
console.log(c+b);
console.log(a/b);
console.log(d/c);
console.log(isNaN(d));


//toString() method is used to convert number to sting
let str1 = f.toString();
console.log(typeof(f));//number
console.log(typeof(str1));//string

//all these methods will return result as a string
console.log(f.toExponential());//return a exponential value of specified number

console.log(f.toFixed(2));//the decimal ponit number will be fixed to the specified number

console.log(f.toPrecision(2));//return a numbered string with specified length

console.log(typeof(f.valueOf()));//the value() method will return the number as number

console.log(Number(true));//return 1 for true and 0 for false

console.log(parseInt(f));//converts a string to number and also return only the integer value not the decimal point

