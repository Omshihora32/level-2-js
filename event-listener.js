// 1. select the element first
// 2. realize wha thing occur when we exicute the event

// in this case : 
// [1] select the paragraph 
// [2] when we click on it then change the color of text.  


// common events :
// 1. click 
// 2. input 
// 3. change 
// 4. submit 
// 5. mouseover 
// 6. keyup



// let p = document.querySelectorAll("p");
// p.forEach(function(val){
//     val.addEventListener("click" , function(){
//         val.style.color = "red";
//     })
// })

let p = document.querySelector("p");
function click() {
    p.style.color = "red";
}
p.addEventListener("click", click);
p.removeEventListener("click", click);