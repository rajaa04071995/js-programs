let str1 = "hai";
let str2 = "hello world";

//method used to slice(cut) the string and stored in new variable it will not affect the original string
let sliced1 = str2.slice(6,11);
let sliced2 = str2.slice(-3,11);//if parameter is negative the string is cut from the end of the string
console.log(sliced1);
console.log(sliced2);

//substr method wil slice the string from specified position 3 to the count of 6
let substring1 = str2.substr(3,6);
console.log(substring1);

//replace particular character with another specified strings
let replace1 = str2.replace("lo", "--");
console.log(replace1);

//method used to made strings from (upper case to lower) and (lower to upper)
let upper = str1.toUpperCase();
console.log(upper);
let lower = upper.toLowerCase();
console.log(lower);

//concadinate 2 strings
let concat = str1.concat(str2);
console.log(concat);

//to remove unwanted space from the string trim() method is used. 
//it will reduce the string length by removing unwated space before and after the string
let str3 = " hi hello world    "
let trim1 = str2.trim();
console.log(trim1);
console.log(str3.length);
console.log(trim1.length);

//method used to extraxt a character from a string
let extract1 = str2.charAt(0);
console.log(extract1);


//split method is used to convert string into an array
let splitArr = str2.split(" ");//split the string based on space between them and stored in array
console.log(splitArr);
console.log(splitArr[0]);


//used to display the index of specified character
//indexOf() and search() return same value and both canot take regular expression value
let index = str1.indexOf("i");
console.log(index);


//used to match the string against regular expression
let match1 = str2.match(/o/g);//g specified global and looks for all occurance in a string
console.log(match1);

//check whether the specified string is present in the string or not
let include = str2.includes("o");//return true or false
console.log(include);


//concept of interpolation used to concadenate value in the variable with another string
let interpol = `12345 ${str1}`;
console.log(interpol);

