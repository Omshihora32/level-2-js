let names = document.querySelector("#name");
let form = document.querySelector("form");
let small = document.querySelector("#hide");
form.addEventListener("submit" , function(dels){
    dels.preventDefault();
    if(names.value.length <= 2){
        small.style.display = "initial";
    }
    else{
        small.style.display = "none";
    }
});