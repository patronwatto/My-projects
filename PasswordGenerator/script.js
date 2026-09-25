const { shallowCopy } = require("ejs/lib/utils");

// Dom Elements to be used from the HTML
const passwordInput = document.getElementById("passwod");
const lengthSlider = document.getElementById("input-slicer");
const lengthDisplay = document.getElementById("range-value");
const uppercaseCheckbox = document.getElementById("inclupper");
const lowercaseCheckbox = document.getElementById("incllower");
const numberChecker = document.getElementById("inclnum");
const symbolsChecker = document.getElementById("inclsym");
const generateBtn = document.getElementById("generate-Btn");
const copyBtn = document.getElementById("copy-btn");
const strengthBar = document.querySelector(".strength-bar");
const strengthText = document.querySelector(".strength-container p");
const strengthLabel = document.getElementById("strenght-label")

// Character sets
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>/?" ;

lengthSlider.addEventListener("input", () => {
    lengthDisplay.textContent = lengthSlider.value;
});

generateBtn.addEventListener("click", makePassword );

function makePassword() {
    const length = Number(lengthSlider.value); 
    const includeUppercase = uppercaseCheckbox.checked;
    const includeLowercase = lowercaseCheckbox.checked;
    const includeNumbers = numberChecker.checked;
    const includeSymbols = symbolsChecker.checked;

    if(!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols){
        alert("Error !!! You must select atleast 1 of the available password options");
        return;
    };

    const newPassword = createRandomPassword(length, includeLowercase, includeNumbers, includeSymbols, includeUppercase);

    passwordInput.value = newPassword;
    updateStrengthMeter(newPassword);
};

function updateStrengthMeter(password){
    const passwordLength = password.length;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*()-_=+[\]{}|;:,.<>?]/.test(password);

    let strengthScore = 0;

    strengthScore += Math.min(passwordLength * 2, 30);

    if(hasUppercase) strengthScore += 17;
    if(hasLowercase) strengthScore += 18;
    if(hasSymbols) strengthScore += 17;
    if(hasNumers) strengthScore += 18;

    // Enforcing a minimum score for every short password   
    if(passwordLength < 8) {
        strengthScore = Math.min(strengthScore, 30);
    };

    const safeScore = Math.max(5, Math.min(100, strengthScore));
    strengthBar.style.width = safeScore + "%";

    let strengthLabelText = "";
    let barColor = "";

    if(strengthScore < 40){
        // weak Password
        barColor = "#fc8181";
        strengthLabelText = "Weak";
    }else if(strengthScore < 70){
        barColor = "#fbd38d";
        strengthLabelText = "Medium";
    }else {
        barColor = "#68d391";
        strengthLabelText = "Strong";
    };
    strengthBar.style.backgroundColor = barColor;
    strengthLabel.textContent = strengthLabelText;

};

function createRandomPassword(length, includeLowercase, includeNumbers, includeSymbols, includeUppercase) {
    let allCharacters = "";

    if(includeLowercase) allCharacters += lowercaseLetters;
    if(includeNumbers) allCharacters += numberCharacters;
    if(includeSymbols) allCharacters += symbolCharacters;
    if(includeUppercase) allCharacters += uppercaseLetters; 

    let password = "";

    for(let i =  0; i < length; i++ ) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    };
    return password;
};

window.addEventListener("DOMContentLoaded", makePassword);

copyBtn.addEventListener("click", () => {
    if(!passwordInput.value) return;
     navigator.clipboard.writeText(passwordInput.value).then(() => showCopySuccess()).catch((error) => console.log("Could not copy:",error));
});

function howCopySuccess() {
    copyBtn.classList.remove("far", "fa-copy");
    copyBtn.classList.add("fas", "fa-check");
    copyBtn.style.color = "#48bb78";

    setTimeout(() => {
        copyBtn.classList.remove("fas", "fa-check");
        copyBtn.classList.add("far", "fa-copy");
        copyBtn.style.color = "";
    }, 1500);
    
};


