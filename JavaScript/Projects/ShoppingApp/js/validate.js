let signUpglobalFlag = false;
let signUpForm = document.getElementById("signUpForm");

let loginGlobalFlag = false;
let loginForm = document.getElementById("loginForm");

let firstNameField = signUpForm.getElementsByClassName("form-fields")[0];
let lastNameField = signUpForm.getElementsByClassName("form-fields")[1];
let emailField = signUpForm.getElementsByClassName("form-fields")[2];
let passwordField = signUpForm.getElementsByClassName("form-fields")[3];

let loginEmailField = loginForm.getElementsByClassName("form-fields")[0];
let loginPasswordField = loginForm.getElementsByClassName("form-fields")[1];

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


let loginEmailValid = loginEmailField.getElementsByClassName("valid-feedback")[0];
let loginEmailInvalid = loginEmailField.getElementsByClassName("invalid-feedback")[0];
let loginPasswordValid = loginPasswordField.getElementsByClassName("valid-feedback")[0];
let loginPasswordInvalid =
	loginPasswordField.getElementsByClassName("invalid-feedback")[0];

const validate = (flag = false) => {
	let isValid = true
	if (flag)
  	signUpglobalFlag = flag;

  if (signUpglobalFlag) {
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
			isValid = false
    } else {
      firstNameValid.style.display = "block";
      firstNameInvalid.style.display = "none";
    }

    if (!lastName) {
      lastNameInvalid.style.display = "block";
      lastNameValid.style.display = "none";
			isValid = false
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
			isValid = false
    } else {
      emailValid.style.display = "block";
      emailInvalid.style.display = "none";
    }

    if (!password || password.length < 8) {
      passwordInvalid.style.display = "block";
      passwordValid.style.display = "none";
			isValid = false
    } else {
      passwordValid.style.display = "block";
      passwordInvalid.style.display = "none";
    }
  }
	return isValid
};

const loginValidate = (flag = false) => {
	let isValid = true
	if (flag)
  	loginGlobalFlag = flag;

	if (loginGlobalFlag) {
		let email = loginEmailField.getElementsByClassName("form-control")[0].value;
		let password =
			loginPasswordField.getElementsByClassName("form-control")[0].value;
		
		if (
			!email ||
			!email.includes("@") ||
			!email.includes(".") ||
			email.startsWith("@") ||
			email.slice(email.lastIndexOf(".") + 1).length < 2
		) {
			loginEmailInvalid.style.display = "block";
			loginEmailValid.style.display = "none";
			isValid = false
		} else {
			loginEmailValid.style.display = "block";
			loginEmailInvalid.style.display = "none";
		}

		if (!password || password.length < 8) {
			loginPasswordInvalid.style.display = "block";
			loginPasswordValid.style.display = "none";
			isValid = false
		} else {
			loginPasswordValid.style.display = "block";
			loginPasswordInvalid.style.display = "none";
		}
	}
	return isValid
}

const reset = () => {
	firstNameField.getElementsByClassName("form-control")[0].value = ''
	lastNameField.getElementsByClassName("form-control")[0].value = ''
	emailField.getElementsByClassName("form-control")[0].value = ''
	passwordField.getElementsByClassName("form-control")[0].value = ''

	firstNameValid.style.display = 'none';
	firstNameInvalid.style.display = 'none'
	lastNameValid.style.display='none'
	lastNameInvalid.style.display ='none'
	emailValid.style.display = 'none'
	emailInvalid.style.display = 'none'
	passwordValid.style.display = 'none'
	passwordInvalid.style.display = 'none'

	signUpglobalFlag = false
}

const resetLogin = () => {
	loginEmailField.getElementsByClassName("form-control")[0].value = ''
	loginPasswordField.getElementsByClassName("form-control")[0].value = ''

	loginEmailValid.style.display = 'none'
	loginEmailInvalid.style.display = 'none'
	loginPasswordValid.style.display = 'none'
	loginPasswordInvalid.style.display = 'none'

	loginGlobalFlag = false
}
