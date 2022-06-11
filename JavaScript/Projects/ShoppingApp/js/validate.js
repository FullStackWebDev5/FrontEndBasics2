let globalFlag = false;
let signUpForm = document.getElementById("signUpForm");

let firstNameField = signUpForm.getElementsByClassName("form-fields")[0];
let lastNameField = signUpForm.getElementsByClassName("form-fields")[1];
let emailField = signUpForm.getElementsByClassName("form-fields")[2];
let passwordField = signUpForm.getElementsByClassName("form-fields")[3];

let firstNameValid = firstNameField.getElementsByClassName("valid-feedback")[0];
let firstNameInvalid =
  firstNameField.getElementsByClassName("invalid-feedback")[0];
let lastNameValid = lastNameField.getElementsByClassName("valid-feedback")[0];
let lastNameInvalid =
  lastNameField.getElementsByClassName("invalid-feedback")[0];
let emailValid = emailField.getElementsByClassName("valid-feedback")[0];
let emailInvalid = emailField.getElementsByClassName("invalid-feedback")[0];
let passwordValid = passwordField.getElementsByClassName("valid-feedback")[0];
let passwordInvalid =
  passwordField.getElementsByClassName("invalid-feedback")[0];

const validate = (flag = false) => {
	if (flag)
  	globalFlag = flag;

  if (globalFlag) {
    let firstName =
      firstNameField.getElementsByClassName("form-control")[0].value;
    let lastName =
      lastNameField.getElementsByClassName("form-control")[0].value;
    let email = emailField.getElementsByClassName("form-control")[0].value;
    let password =
      passwordField.getElementsByClassName("form-control")[0].value;

    if (!firstName) {
      firstNameInvalid.style.display = "block";
      firstNameValid.style.display = "none";
    } else {
      firstNameValid.style.display = "block";
      firstNameInvalid.style.display = "none";
    }

    if (!lastName) {
      lastNameInvalid.style.display = "block";
      lastNameValid.style.display = "none";
    } else {
      lastNameValid.style.display = "block";
      lastNameInvalid.style.display = "none";
    }

    if (
      !email ||
      !email.includes("@") ||
      !email.includes(".") ||
      email.startsWith("@") ||
      email.slice(email.lastIndexOf(".") + 1).length < 2
    ) {
      emailInvalid.style.display = "block";
      emailValid.style.display = "none";
    } else {
      emailValid.style.display = "block";
      emailInvalid.style.display = "none";
    }

    if (!password || password.length < 8) {
      passwordInvalid.style.display = "block";
      passwordValid.style.display = "none";
    } else {
      passwordValid.style.display = "block";
      passwordInvalid.style.display = "none";
    }
  }
};
