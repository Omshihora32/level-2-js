let input = document.querySelector("input");
let cnt = document.querySelector("span");
input.addEventListener("input" , function(del){
    let left = 20 - input.value.length;
    cnt.textContent = left;
    if(left < 0){
        cnt.style.color = "red";
    }
    else{
        cnt.style.color = "black";
    }
});