const newSet = new Set();//create a set
newSet.add("a");//add element to the set
newSet.add("b");
newSet.add(1);
newSet.add(2);
newSet.add(1);//dublicate values canot be added into the set
newSet.delete(1);//delete element from the set
console.log(newSet.has(2));//return the boolean value if particular element is present in the set
console.log(newSet.values());//return value in the set
newSet.forEach(myFun);
function myFun(x){
    console.log(x);
}

//return each value from a set
for(let x of newSet){
    console.log(x);
}


const newMap = new Map();//create a map
newMap.set("apple", 500);//set key and value to the map
newMap.set("banana", 200);
newMap.set("orrange", 400);
newMap.set("orrange", 400);//dont allow duplicate value in the map
newMap.set(25, "price");//we can set any type of keys for a value
newMap.delete("apple");
console.log(newMap.entries());//return key value inside the map
console.log(newMap.has(25));//returns true if the map contains the specified key element
newMap.forEach(myFun1);
function myFun1(x){
    console.log(x);
}

for(let x of newMap){
    console.log(x);//return each key value from the map
}