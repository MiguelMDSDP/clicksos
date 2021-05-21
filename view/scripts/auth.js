const loginButton = document.getElementById("login-button");
const usernameInput = document.querySelector('#username-input');
const passwordInput = document.querySelector('#password-input');
const passwordRepeatInput = document.querySelector("#password-repeat-input");


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
    } else if (passwordRepeatInput) {
        if (passwordRepeatInput.value === "") {
            event.preventDefault();
            document.getElementById("password-repeat-error").innerHTML = "* Repita a senha!";
            if (!passwordRepeatInput.classList.contains("input-error")) passwordRepeatInput.classList.add("input-error");
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



if (passwordRepeatInput) {
    passwordRepeatInput.addEventListener("keyup", () => {
        verifyForm();

        if (passwordRepeatInput.value === "") {
            if (!passwordRepeatInput.classList.contains("input-error")) passwordRepeatInput.classList.add("input-error");
            document.getElementById("password-repeat-error").innerHTML = "* Repita a senha!";        
        } else {
            if (passwordRepeatInput.classList.contains("input-error")) passwordRepeatInput.classList.remove("input-error");
            document.getElementById("password-repeat-error").innerHTML = "";
        }
    });
}



const verifyForm = () => {
    const username = document.querySelector('#username-input').value;
    const password = document.querySelector('#password-input').value;
    const passwordRepeatInput = document.querySelector("#password-repeat-input");

    const loginButton = document.getElementById("login-button");

    if (username === "" || password === "") {
        if (!loginButton.classList.contains("disabled")) loginButton.classList.add("disabled");
    } else if (passwordRepeatInput) {
        if (passwordRepeatInput !== "") {
            if (loginButton.classList.contains("disabled")) loginButton.classList.remove("disabled");
        }
    } else {
        if (loginButton.classList.contains("disabled")) loginButton.classList.remove("disabled");
    }
}