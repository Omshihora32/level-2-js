let h1 = document.querySelector("h1");
console.dir(h1);
h1.innerHTML = "<i>loda</>"; // a h1 tag ni andar html umere che{i tag works}
h1.textContent = "<i>loda</>"; // a khali text ne j badle che{i not works}
h1.innerText = "<i>loda</>"; // a khali text ne j badle che{i not works}