document.addEventListener("DOMContentLoaded", () => {
    const passwordDisplay = document.getElementById("passwordDisplay");
    const lengthInput = document.getElementById("length");
    const includeUppercase = document.getElementById("includeUppercase");
    const includeNumbers = document.getElementById("includeNumbers");
    const includeSymbols = document.getElementById("includeSymbols");
    const generateBtn = document.getElementById("generateBtn");
    const copyBtn = document.getElementById("copyBtn");

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/";

    function generatePassword() {
        let length = parseInt(lengthInput.value);
        let characters = lowercaseChars;
        let password = "";

        if (includeUppercase.checked) characters += uppercaseChars;
        if (includeNumbers.checked) characters += numberChars;
        if (includeSymbols.checked) characters += symbolChars;

        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        passwordDisplay.value = password;

        // Armazena no localStorage
        localStorage.setItem("lastGeneratedPassword", password);
    }

    generateBtn.addEventListener("click", generatePassword);

    // Copiar senha para área de transferência
    copyBtn.addEventListener("click", () => {
        passwordDisplay.select();
        document.execCommand("copy");
        alert("Senha copiada!");
    });

    // Carregar a última senha gerada
    const savedPassword = localStorage.getItem("lastGeneratedPassword");
    if (savedPassword) {
        passwordDisplay.value = savedPassword;
    }
});
