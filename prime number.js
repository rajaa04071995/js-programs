

function myPrime(num){
    if(num<2){
        return "Not a prime number";
    }
    else{
        for(let i=2; i<num; i++){
            if(num % i == 0){
                return "Not a prime number";
            }
        }
    }
    return "Prime number";
}

console.log(myPrime(7));


