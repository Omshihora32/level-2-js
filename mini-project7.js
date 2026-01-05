const users = [
    {
        name: "tirth Lukhi",
        pic: "https://i.pinimg.com/1200x/78/53/ca/7853ca833f7ba36976ff63a1a736a91c.jpg",
        bio: "I am a good boy who takes care of other boys in their family."
    },
    {
        name: "tool Joshi",
        pic: "https://i.pinimg.com/736x/4c/a7/9a/4ca79a3eef1f0bc69eadf348326c757d.jpg",
        bio: "Fitness lover with a positive and disciplined mindset."
    },
    {
        name: "tim Verma",
        pic: "https://i.pinimg.com/736x/65/49/b1/6549b1659381e98dfa588e52bebbb937.jpg",
        bio: "Friendly personality who enjoys teamwork and collaboration."
    },
    {
        name: "sima Singh",
        pic: "https://i.pinimg.com/736x/06/c0/62/06c0627289fc1fc2b55a2eddc27055af.jpg",
        bio: "Focused learner aiming to grow in the tech industry."
    },
    {
        name: "janu gajra",
        pic: "https://i.pinimg.com/736x/12/cb/ef/12cbef2de0f2d14bf0eae9bece773ad8.jpg",
        bio: "Simple person who believes in consistency and hard work."
    },
    {
        name: "jay Malviya",
        pic: "https://i.pinimg.com/736x/cf/9e/52/cf9e525ffdd4e01b2b72ec4e9c03ce4b.jpg",
        bio: "Curious mind who loves exploring new technologies."
    },
    {
        name: "vishwa Patel",
        pic: "https://i.pinimg.com/736x/49/76/11/49761145057fe0f7f371c08af105b97d.jpg",
        bio: "Passionate about learning, growth, and self-improvement."
    }
];
function showUsers(arr) {
    arr.forEach(function (user) {
        // Create main card
        const card = document.createElement("div");
        card.id = "card";

        // Create image
        const img = document.createElement("img");
        img.src = user.pic;
        img.alt = "bg-image";
        img.className = "bg-img";

        // Create blurred layer
        const blurLayer = document.createElement("div");
        blurLayer.style.backgroundImage = `url(${user.pic})`;
        blurLayer.id = "blured-layer";

        // Create content container
        const content = document.createElement("div");
        content.id = "content";

        // Create heading
        const heading = document.createElement("h3");
        heading.innerText = user.name;

        // Create paragraph
        const para = document.createElement("p");
        para.innerText = user.bio;

        // Append elements (IMPORTANT ORDER)
        content.appendChild(heading);
        content.appendChild(para);

        card.appendChild(img);
        card.appendChild(blurLayer);
        card.appendChild(content);

        // Finally add card to body (or any container)
        document.querySelector(".cards").appendChild(card);
    })
}
showUsers(users);

let input = document.querySelector("input");
let card = document.querySelector(".cards");
input.addEventListener("input", function () {
    let newuser = users.filter(function (user) {
        return user.name.startsWith(input.value);
    })
    card.innerHTML = "";
    showUsers(newuser);
    if(newuser.length === 0){
        card.textContent = "No User Found..";
    }
})