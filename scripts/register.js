const registerButton = document.getElementById("register-button");
const titleInput = document.querySelector('#title-input');
const descriptionTextarea = document.querySelector('#description-textarea');


registerButton.addEventListener("click", (event) => {
    if (titleInput.value === "" || descriptionTextarea.value === "") {
        event.preventDefault();
        if (titleInput.value === "") {
            document.getElementById("title-error").innerHTML = "* Informe o título!";
            if (!titleInput.classList.contains("input-error")) titleInput.classList.add("input-error");
        }
        if (descriptionTextarea.value === "") {
            document.getElementById("description-error").innerHTML = "* Informe a descrição!";
            if (!descriptionTextarea.classList.contains("textarea-error")) descriptionTextarea.classList.add("textarea-error");
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



descriptionTextarea.addEventListener("keyup", () => {
    verifyForm();

    if (descriptionTextarea.value === "") {
        if (!descriptionTextarea.classList.contains("textarea-error")) descriptionTextarea.classList.add("textarea-error");
        document.getElementById("description-error").innerHTML = "* Informe a descrição!";        
    } else {
        if (descriptionTextarea.classList.contains("textarea-error")) descriptionTextarea.classList.remove("textarea-error");
        document.getElementById("description-error").innerHTML = "";
    }
});



const verifyForm = () => {
    if (titleInput.value === "" || descriptionTextarea.value === "") {
        if (!registerButton.classList.contains("disabled-button")) registerButton.classList.add("disabled-button");
    } else {
        if (registerButton.classList.contains("disabled-button")) registerButton.classList.remove("disabled-button");
    }
}