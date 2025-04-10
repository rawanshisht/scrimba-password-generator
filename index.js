const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


let passwordEl_1 = document.getElementById("password-1")
let passwordEl_2 = document.getElementById("password-2")
let lengthErrorEl = document.getElementById("length-error-el")
let passwordLength = 15

function generatePassword() {
    passwordEl_1.textContent = ""
    passwordEl_2.textContent = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        passwordEl_1.textContent += characters[randomIndex]
    }
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        passwordEl_2.textContent += characters[randomIndex]
    }
}
function copyToClipboard(passwordNumber) {
    let passwordText;
    if (passwordNumber === 1) {
        passwordText = passwordEl_1.textContent;
        alert("Password 1 copied to clipboard" + passwordText)
    }
    else {
        passwordText = passwordEl_2.textContent;
        alert("Password 2 copied to clipboard" + passwordText)
    }
    navigator.clipboard.writeText(passwordText);
}
function setPasswordLength() {
    const length = document.getElementById("password-length").valueAsNumber;
    if (!length || length <= 0 || length > 20) {
        alert("Please enter a valid number greater than 0 and less than 20.");
        passwordLength = 15
        lengthErrorEl.textContent = "Please enter a valid number greater than 0 and less than 20."
    } else {
        console.log("Password length set to:", length);
        passwordLength = length
    }
}