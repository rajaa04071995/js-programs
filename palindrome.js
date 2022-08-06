"use strict";

var strpal = "";
function myPal(str){
    for(let i = str.length-1; i>=0; i--){
        strpal += str[i];
    }
    if(str == strpal){
        return "its a palindrome";
    }
    else{
        return "its not a palindrome";
    }
}
console.log(myPal("mad am"));

//check palindrome or not using build in methods
let str1 = "madam";
let rev = str1.split("");
let revarr = rev.reverse();
let string1 = revarr.join("");
let result = (str1 === string1) ? true : false;
console.log(result);


let str2 = "121";
let palin = str2.split("").reverse().join("");
console.log((str2 == palin) ? 'palindrome' : 'not palindrome');


//reverse a sentence
function myReverse(x, seperator){
   return x.split(seperator).reverse().join(seperator);
}


let reverseString = myReverse("hi am the one here","");
console.log(reverseString);
console.log(myReverse(reverseString, " "));
