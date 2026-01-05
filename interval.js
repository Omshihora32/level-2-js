// setTimeout(function(){
//     console.log("hello");
// } , 5000);

// setInterval(function(){
//     console.log("hello");
// } , 5000);

let count = 0;
let interval = setInterval(function(){
    if(count <= 10){
        console.log(count);
        count++;
    }
    else{
        clearInterval(interval);
    }
} , 200)