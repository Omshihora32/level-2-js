let form = document.querySelector("#loginForm");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let emailMessage = document.querySelector("#emailError");
let passwordMessage = document.querySelector("#passwordError");
let result = document.querySelector("#resultmassage")

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const mailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let mailrslt = mailregex.test(email.value);
    let passrslt = passregex.test(password.value);

    let isvalid = true;

    if (!emailMessage) {
        emailMessage.textContent = "Please Check Your Email Address";
        emailMessage.style.display = "block";
        isvalid = false;
    }
    else {
        emailMessage.style.display = "none";
    }

    if (!passrslt) {
        passmassage.textContent = "Please Check Your Password";
        passmassage.style.display = "block";
        isvalid = false;
    }
    else {
        passmassage.style.display = "none";
    }
    if (isvalid) {
        result.textContent = "Everything is Correct."
        result.style.display = "flex";
    }
    else {
        result.style.display = "none";
    }
})