let progresstext = document.querySelector("#progressText");
let progressbar = document.querySelector(".progress-bar");
let startBtn = document.querySelector("#startBtn");
let text = document.querySelector(".text");

startBtn.addEventListener("click", function () {
    let count = 1;
    let dld = setInterval(function () {
        if (count <= 100) {
            progressbar.style.width = `${count}%`;
            progresstext.textContent = count + " %";
            console.log(count);
            count++;
        }
        else {
            text.textContent = "Download Completed..";
            clearInterval(dld);
        };
    }, 50);
})