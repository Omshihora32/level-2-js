// event bubbling :- jena par event avse jo tena par listener nahi hoy to apdu event tena perant par listener find karse and evu karta karta uparni baju move karse

// event capturing :- jena par event avse jo tena par listener nahi hoy to apdu event tena child par listener find karse and evu karta karta niche baju move karse(just opposite of event bubbeling).
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
ul.addEventListener("click" , function(del){
    del.target.classList.toggle("lt");
})