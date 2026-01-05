// submit : event used for form input output 
let form = document.querySelector("form");
let main = document.querySelector("#main");
let input = document.querySelectorAll("input");
form.addEventListener("submit", function (del) {
    del.preventDefault();
    let card = document.createElement("div");
    card.classList.add("card");


    let profile = document.createElement("div");
    profile.classList.add("profile");


    let profileimg = document.createElement("img");
    profileimg.setAttribute("src", input[0].value);
    profileimg.setAttribute("alt", "profile img");
    profileimg.classList.add("p-img");

    let head = document.createElement("h3");
    head.textContent = input[1].value;

    let subhead = document.createElement("h5");
    subhead.textContent = input[2].value;
    subhead.classList.add("sub-heading");

    let para = document.createElement("p");
    para.textContent = input[3].value;
    para.classList.add("description");

    card.appendChild(profile);
    profile.appendChild(profileimg);
    card.appendChild(head);
    card.appendChild(subhead);
    card.appendChild(para);
    console.log(card);

    main.appendChild(card);
    input.forEach(function(inp){
        if(inp.type !== "submit"){
            inp.value = "";
        }
    });
})