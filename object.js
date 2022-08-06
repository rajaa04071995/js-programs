const car = {
    model : "ford",
    year : 2016,
    color : "green",
    serviceDate:{
        date1 : "2017-05-07",
        date2 : "2018-05-07"
        },    
    carPrint : function(){
        return this.model + " " + this.year + " " + this.color;
    }
    
};
console.log(car.carPrint());
console.log(car.serviceDate.date1);
console.log(typeof(car));
var undef;//undef variable declared without value
console.log(undef);//variable declared without value is set to be undefined
var nullvalue = null;//absence of value is said to be null
console.log(nullvalue);//variable declared with value as null
console.log(typeof(null)) ;

//comparing two objects are always return false
let y = new String("1");
let z = new String("1");
console.log(y===z);