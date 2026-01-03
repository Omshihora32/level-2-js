// 1. create element
// 2. Append(after script tag) or prepend the element(before script tag).
let img = document.createElement("img"); //1
console.log(img);
img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1759672144486-79de6c2317cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
img.setAttribute("alt" , "broken image");
document.body.prepend(img); //2