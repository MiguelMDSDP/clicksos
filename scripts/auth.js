const loginButton = document.getElementById("login-button");
const usernameInput = document.querySelector('#username-input');
const passwordInput = document.querySelector('#password-input');


loginButton.addEventListener("click", (event) => {
    if (usernameInput.value === "" || passwordInput.value === "") {
        event.preventDefault();
        if (usernameInput.value === "") {
            document.getElementById("username-error").innerHTML = "* Informe seu nome de usuário!";
            if (!usernameInput.classList.contains("input-error")) usernameInput.classList.add("input-error");
        }
        if (passwordInput.value === "") {
            document.getElementById("password-error").innerHTML = "* Informe sua senha!";
            if (!passwordInput.classList.contains("input-error")) passwordInput.classList.add("input-error");
        }
    }
});



usernameInput.addEventListener("keyup", () => {
    verifyForm();

    if (usernameInput.value === "") {
        if (!usernameInput.classList.contains("input-error")) usernameInput.classList.add("input-error");
        document.getElementById("username-error").innerHTML = "* Informe seu nome de usuário!";        
    } else {
        if (usernameInput.classList.contains("input-error")) usernameInput.classList.remove("input-error");
        document.getElementById("username-error").innerHTML = "";
    }
});



passwordInput.addEventListener("keyup", () => {
    verifyForm();

    if (passwordInput.value === "") {
        if (!passwordInput.classList.contains("input-error")) passwordInput.classList.add("input-error");
        document.getElementById("password-error").innerHTML = "* Informe sua senha!";        
    } else {
        if (passwordInput.classList.contains("input-error")) passwordInput.classList.remove("input-error");
        document.getElementById("password-error").innerHTML = "";
    }
});



const verifyForm = () => {
    if (usernameInput.value === "" || passwordInput.value === "") {
        if (!loginButton.classList.contains("disabled-button")) loginButton.classList.add("disabled-button");
    } else {
        if (loginButton.classList.contains("disabled-button")) loginButton.classList.remove("disabled-button");
    }
}