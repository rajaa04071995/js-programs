//next method returns an object with value and done
function myFun(){
    return {
        next : function(n){
            n += 6;
            return {value: n , done: false};
        }
    };
}

const n1 = myFun();
console.log(n1.next(10));
console.log(n1.next(15));
console.log(n1.next(100));


function myFun1(n2){
    return (n2+=6);
}

console.log(myFun1(100));
console.log(myFun1(24));



for (let i = 1; i <= 100; i++) {
    let f = i % 3 == 0,
      b = i % 5 == 0;
    console.log(f ? 'FIZZ': b ? 'Buzz' : i);
  }