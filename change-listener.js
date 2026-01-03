// change listener trigger when : 
// input , select , textarea

let h1 = document.querySelector("h1");
let select = document.querySelector("select");
select.addEventListener("change" , function(del){
    // console.log(del.target.value);
    h1.textContent = del.target.value + " Device Selected.";
    h1.style.textTransform = "capitalize";
})