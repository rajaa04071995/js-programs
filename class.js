/*class is not an object it is an template for objects
use keyword "class"
alwways contains a method named constructor (if constructor is not define in class..JS automatically create an empty constructor)
a class can contain many methods but only one constructor

constructor is a special method with name constructor
constructor executes automatically when new object is created
constructor is used to initialize object properties*/

class Car{
    constructor(name,year){//constructor method
        this.name = name;
        this.year = year;
    }
    age(x){//class method
        
        return this.name + " " + this.year + " " + (x-this.year);//x is a variable with current year
    }

    get getmethod(){
        return this.name;
    }
    set setmethod(x){//set the value an object...set method must have atleast one parameter
        this.name = x;
    }

    /* static method define inside the class using static keyword
    static method can be accessed by calling class directly without an object */
    static hello(){
        return "hello this is a responce from static method";
    }


}

const date = new Date();//get current date
const year = date.getFullYear();//get year of current date
let myCar = new Car("FORD",2016);

myCar.setmethod = "BMW";//change the value of object using set method
console.log(myCar.getmethod);//we can call the get method as object..no need of using () for get method

console.log(Car.hello());//call static method using class name

let myCar1 = new Car("VOLVO",2021);//objects use the class template
let myCar2 = new Car("TATA",2018);
let myCar3 = new Car("TOYOTA",2019);

console.log("Car Details: " + myCar.age(year));//call the class method age by sending year as argument
console.log("Car Details: " + myCar1.age(year));
console.log("Car Details: " + myCar2.age(year));
console.log("Car Details: " + myCar3.age(year));




//class inheritance using extends keyword
class Color extends Car{//extends all properties of parent class to the child class
    constructor(name,year,color){ 
        super(name,year);//super refers to the parent class when constructor of Color class is called it also calls the constructor of parent class
        this.color=color;
        

    }

    vechicle(){
        return this.name +" "+ this.year + " " + this.color ;
    }
    
}

const inherit = new Color("FORD",2016,"RED");//call child class with parent class properties
console.log(inherit.vechicle());

