let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let containerPassword = document.querySelector("#container-password");
let passwordElement = document.querySelector("#password"); // Adicionado para exibir a senha corretamente

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novaSenha = "";

// Corrigido o uso de "value"
sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
    sizePassword.innerHTML = this.value;
};

function generatePassword() {
    let pass = "";
    for (let i = 0; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    containerPassword.classList.remove("hide");
    passwordElement.innerHTML = pass; // Exibe a senha corretamente
    novaSenha = pass;
}

function copyPassword() {
    if (novaSenha) {
        navigator.clipboard.writeText(novaSenha);
        alert("Senha copiada com sucesso, Jovem Padawan!");
    } else {
        alert("Gere uma senha antes de copiar!");
    }
}