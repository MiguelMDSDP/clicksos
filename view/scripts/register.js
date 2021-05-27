const registerButton = document.getElementById("register-button");
const titleInput = document.querySelector('#title-input');
const descriptionInput = document.querySelector('#description-textarea');


registerButton.addEventListener("click", (event) => {
    if (titleInput.value === "" || descriptionInput.value === "") {
        event.preventDefault();
        if (titleInput.value === "") {
            document.getElementById("title-error").innerHTML = "* Informe o título!";
            if (!titleInput.classList.contains("input-error")) titleInput.classList.add("input-error");
        }
        if (descriptionInput.value === "") {
            document.getElementById("description-error").innerHTML = "* Informe a descrição!";
            if (!descriptionInput.classList.contains("textarea-error")) descriptionInput.classList.add("textarea-error");
        }
    }
});



titleInput.addEventListener("keyup", () => {
    verifyForm();

    if (titleInput.value === "") {
        if (!titleInput.classList.contains("input-error")) titleInput.classList.add("input-error");
        document.getElementById("title-error").innerHTML = "* Informe o título!";        
    } else {
        if (titleInput.classList.contains("input-error")) titleInput.classList.remove("input-error");
        document.getElementById("title-error").innerHTML = "";
    }
});



descriptionInput.addEventListener("keyup", () => {
    verifyForm();

    if (descriptionInput.value === "") {
        if (!descriptionInput.classList.contains("textarea-error")) descriptionInput.classList.add("textarea-error");
        document.getElementById("description-error").innerHTML = "* Informe a descrição!";        
    } else {
        if (descriptionInput.classList.contains("textarea-error")) descriptionInput.classList.remove("textarea-error");
        document.getElementById("description-error").innerHTML = "";
    }
});



const verifyForm = () => {
    if (titleInput.value === "" || descriptionInput.value === "") {
        if (!registerButton.classList.contains("disabled-button")) registerButton.classList.add("disabled-button");
    } else {
        if (registerButton.classList.contains("disabled-button")) registerButton.classList.remove("disabled-button");
    }
}