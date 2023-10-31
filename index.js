document.addEventListener("DOMContentLoaded", function(){
    const lengthPassword = document.getElementById("password-length")
    const includeUpperCase = document.getElementById("include-uppercase")
    const includeNumbers = document.getElementById("include-numbers")
    const includeSymbols = document.getElementById("include-symbols")
    const generateButton = document.getElementById("generate")
    const passwordDisco = document.getElementById("password")

    generateButton.addEventListener("click", generatePassword)

    function generatePassword() {
        const length = lengthPassword.value;
        const uppercase = includeUpperCase.checked;
        const numbers = includeNumbers.checked;
        const symbols = includeSymbols.checked;
        const charset = "abcdefghijklmnopqrstuvwxyz" + (uppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "") + (numbers ? "0123456789" : "") + (symbols ? "@#$%^&=+_" : "");

        let password = ""
        for (let i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex]
        }
        passwordDisco.textContent =password;
    }
})