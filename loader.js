let main = document.querySelector("#main");
let h1 = document.querySelector("h1");
let count = 0;
let loader = setInterval(function(){
    if(count <= 100){
        h1.textContent = count;
        count++;
    }
    else clearInterval(loader);
} , 100);