let main = document.querySelector("#main");
console.dir(main);
window.addEventListener("mousemove" , function(dels){
    main.style.top = dels.clientY + "px";
    main.style.left = dels.clientX + "px";
})