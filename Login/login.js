const form = document.getElementById("signup");
const username = document.getElementById("username");
const email = document.getElementById("email");
const  password = document.getElementById("password");
const cnfmpassword = document.getElementById("cnfmpassword");
const sgnFrm = document.getElementById("signup");
const logFrm = document.getElementById("login");
const sgnBtn = document.getElementById("signup-btn");
const logBtn = document.getElementById("login-btn");



form.addEventListener("submit", function(e) {
    e.preventDefault();

    const isRequiredValid = checkRequired([username, email, password, cnfmpassword]);

    let isFormValid = isRequiredValid;
     
    if(isRequiredValid) {
        const isUsernameValid = checkLength(username, 3, 15);
        const isEmailValid = checkEmail(email);
        const isPasswordValid = checkLength(password, 6, 25);
        const isPasswordsMatch = checkPasswordsMatch(password, cnfmpassword);

        isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isPasswordsMatch ;
    };

    if(isFormValid){
        alert("Registration Successfull")
        form.reset();

        document.querySelectorAll(".form-group").forEach((group) => {
            group.className = "form-group";
        });
    };
});

function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${formatFieldName(input)} must be atleast ${min} characters.`);
        return false;
    }else if(input.value.length > max) {
        showError(input, `${formatFieldName(input)} must not be more than ${max} characters.`);
        return false;
    }else {
        showSuccess(input);
        return true;
    };
    
};

function checkEmail(email) {
    // email regex that covers most common email formats
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email.value.trim())){
        showSuccess(input);
        return true;
    }else {
        showError(input, "Email is not valid");
        return false;
    };
};

function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value){
        showError(input2, "Passwords mismatch");
        return false;
    }
        return true; 
    
};

function checkRequired(inputArray) {
    let isValid = true;

    inputArray.forEach((input) => {
        // Password is required
        if(input.value.trim() === ""){
            showError(input, `${formatFieldName(input)} is required`);
            isValid = false;
        } else {
            showSuccess(input);
        };
    });
    return isValid;
};
// Format field name with proper Capitalization
function formatFieldName(input) {
    // input id: username->Username;
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
};

function showError(input,message){
    const formGroup = input.parentElement;
    formGroup.classname = "form-group error";
    const small = formGroup.querySelector("small");
    small.innerText = message;
};

logBtn.addEventListener("click", () => {
    sgnFrm.classList.add("hidden");
    logFrm.classList.remove("hidden");
});

sgnBtn.addEventListener("click", () => {
    logFrm.classList.add("hidden");
    sgnFrm.classList.remove("hidden");
});



