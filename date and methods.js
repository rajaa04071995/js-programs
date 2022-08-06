const date = new Date();//date object return full date tme and zone
console.log(date);
console.log(typeof(Date()));//Date() method returns date as a string

//Date methods get specified values from date object
console.log(date.getFullYear());
console.log(date.getMonth());//month from jan=0 to dec=11
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());//return milli seconds from 1 jan 1970
console.log(date.getDay());//day from sun=0 to sat=6

const someday = new Date();
someday.setFullYear(2020, 07,14);
console.log(someday);
if(someday>date){
    console.log("today is before");
}
else{
    console.log("today is after");
}

