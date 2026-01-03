// event flow is from (phase 1)capturing → (phase 2)bubbling

let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let btn = document.querySelector("button");

a.addEventListener("click", function () {
    console.log("a is run");
} , true);

b.addEventListener("click", function () {
    console.log("b is run");
},true);
c.addEventListener("click", function () {
    console.log("c is run");
});
btn.addEventListener("click", function () {
    console.log("button is clicked");
});