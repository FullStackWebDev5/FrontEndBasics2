const DB_USERS = []

let signUpNav = document.getElementById('sign-up-nav')
let loginNav = document.getElementById('login-nav')

const signUp = () => {
	let notificationAlert = document.getElementById('notification-alert')
	let notificationText = document.getElementById('notification-text')
	let isValid =	validate(true)

	if (isValid) {
		let firstNameField = signUpForm.getElementsByClassName("form-fields")[0];
		let lastNameField = signUpForm.getElementsByClassName("form-fields")[1];
		let emailField = signUpForm.getElementsByClassName("form-fields")[2];
		let passwordField = signUpForm.getElementsByClassName("form-fields")[3];

		let firstName =
		firstNameField.getElementsByClassName("form-control")[0].value;
		let lastName =
			lastNameField.getElementsByClassName("form-control")[0].value;
		let email = emailField.getElementsByClassName("form-control")[0].value;
		let password =
			passwordField.getElementsByClassName("form-control")[0].value;

		let newUser = {
      firstName,
      lastName,
      email,
      password,
    };

		DB_USERS.push(newUser)

		reset()
		$('#signUpModal').modal('hide')

		notificationAlert.classList = 'alert alert-success alert-dismissible fade show'
		notificationText.innerText = 'Congratulations! You have successfully signed up!'
		notificationAlert.style.display = 'block';

		setTimeout(() => {
			notificationAlert.style.display = 'none';
		}, 5000)

		let previousSignUpNavInnerContent = signUpNav.innerHTML
		let previousLoginNavInnerContent = loginNav.innerHTML

		signUpNav.innerHTML = `<a class="nav-link">Hi ${newUser.firstName}</a>`
		loginNav.innerHTML = '<a class="nav-link">Logout</a>'

		loginNav.addEventListener('click', () => {
			signUpNav.innerHTML = previousSignUpNavInnerContent
			loginNav.innerHTML = previousLoginNavInnerContent
		})
	}
}