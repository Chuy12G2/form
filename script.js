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
        emailError.classList.add = "error";
    }else{
        showErrorEmail();
    }
})

form.addEventListener("submit", (e) => {
    if(!email.validity.valid){
        showErrorEmail();
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