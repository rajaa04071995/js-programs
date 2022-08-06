const arr = [5,7,85,24,36];
let str = "conditional_statement";
const myObj = {model:"ford",year:2018,month:"feb"};
let num1 = 25;
let num2 = 36;

//string reverse using for loop
var srtrev = "";
for(let i=str.length-1 ; i >= 0 ; i--){
    srtrev += str[i];
}
console.log(srtrev);


//used to access values in object
for(let x in myObj){
    console.log(myObj[x]);
}

//used to access element in an array for..in will return key of array or object
for(let x in arr){
    console.log(arr[x]);
}


//for..of loop will return the value of an array or string
for(let x of str){
    console.log(x);
}


//while loop check the condition and will execute if the condition is true
let i = 0;
while(i<=5){
    console.log(i);
    i++;
}

//do..while loop will execute once before checking the condition...condition maybe true or false...
//ececute code in do untill the condition is true
let y = 0;
do{
    console.log(y);
    y++;
}while(y<=5);



for(let i=0; i<=str.length-1; i++){
    if(i==3){break;}//break and come out of the loop if the condition gets true
    console.log(str[i]);
}

for(let i=0; i<=str.length-1; i++){
    if(i == 3){continue;}//skip the loop for that particular condition and continue to the next iteration
    console.log(str[i]);
}

//lable statement
list: {
    console.log(arr[0]);
    break list;//breaks here and not made the next line to execute
    console.log(arr[1]);
}


