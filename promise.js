
//promise constructor
var promise = new Promise(function(resolve,reject){
    const x = "hai";
    const y = "ha";
    if(x === y){
        resolve();
    }
    else{
        reject();
    }
});

//promise consumer
promise
.then(function(){//success message
    console.log("success");
})
.catch(function(){//failure message
    console.log("fail");
});