let input = document.querySelector("input");
console.dir(input);
let d = "";
input.addEventListener("input" , function(i){
    if(i.data !== null){
        console.log(i.data); 
    }
})