
let num1 = 25;
let num2 = 36;

//ternarry operator work as like if else
const value = (num1 > num2) ? console.log("greater") : console.log("lesser");

//if..else if..
if(num1>num2){
    console.log("greater");
}
else if(num1<num2){
    console.log("lesser");
}
else{
    console.log("equal value");
}


//used to perform diffrent actions based on condition
//break should be necessasry for every case so that the loop will be break and jump away
switch(new Date().getDay()){
    case 0:
        console.log("day = " + "sunday");
        break;
    case 1:
        console.log("day = " + "tuesday");
        break;
    case 3:
        console.log("day = " + "wednesday");
        break;
    case 4:
        console.log("day = " + "thursday");
        break;
    case 5:
        cnsole.log("day = " + "friday");
        break;
    case 6:
        console.log("day = "+"saturday");
        break;
    default:
        console.log("invalid");
        break;
}

