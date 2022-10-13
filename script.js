const form = document.querySelector("form");
const email = document.getElementById("mail");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const passwordVal = document.getElementById("password-validation");

const emailError = document.querySelector(".mail-error");
const countryError = document.querySelector(".country-error");
const zipError = document.querySelector(".zip-error");
const passwordError = document.querySelector(".password-error");
const passwordValError = document.querySelector(".password-val-error");

email.addEventListener("input", () => {
    if(email.validity.valid){
        emailError.textContent = "";
        
    }else{
        showErrorEmail();
    }
})

country.addEventListener("input", () => {
    if(country.validity.valid){
        countryError.textContent = "";
    }else{
        showErrorCountry();
    }
})

zip.addEventListener("input", () => {
    if(zip.validity.valid){
        zipError.textContent = "";
    }else{
        showErrorZip();
    }
})

password.addEventListener("input", () => {
    if(password.validity.valid){
        passwordError.textContent = "";
    } else {
        showErrorPassword();
    }
})

passwordVal.addEventListener("input", () => {
    if(password.value == passwordVal.value){
        passwordValError.textContent = "";
    }else{
        showErrorPasswordVal();
    }
})



//Validation when form is submited
form.addEventListener("submit", (e) => {
    if(!email.validity.valid ){
        showErrorEmail();
        showErrorCountry();
        e.preventDefault();
    }
})


function showErrorEmail(){
    if(email.validity.valueMissing){
        emailError.textContent = "You need to enter an email adress"
    }else if (email.validity.typeMismatch){
        emailError.textContent = "Entered value needs to be an e-mail address.";
    }
    emailError.classList.add("error");
}

function showErrorCountry(){
    if(country.validity.valueMissing){
        countryError.textContent = "You need to enter your country"
    }else if (country.validity.tooShort){
        countryError.textContent = "The field must have at least 3 characters";
    }
    countryError.classList.add("error");
}

function showErrorZip(){
    if(zip.validity.valueMissing){
        zipError.textContent = "You need to enter your zip code";
    }else if(zip.validity.patternMismatch){
        zipError.textContent = "You need to enter a valid zip code"
    }
    zipError.classList.add("error");
}

function showErrorPassword(){
    console.log("aaa")
    if(password.validity.valueMissing){
        passwordError.textContent = "You need to enter your password";
    }else if(password.validity.patternMismatch){
        passwordError.textContent = "Your password needs to be have at least 8characters, at least 2 letters and 2 numbers or symbols"
    }
    passwordError.classList.add("error")
} 

function showErrorPasswordVal(){
    passwordValError.textContent = "Your passwords need to match";
    passwordValError.classList.add("error");
}