const login = () => {
	let signUpNav = document.getElementById('sign-up-nav')
	let loginNav = document.getElementById('login-nav')
	let notificationAlert = document.getElementById('notification-alert')
	let notificationText = document.getElementById('notification-text')

	let isValid = loginValidate(true)

	if (isValid) {
		let loginEmailField = loginForm.getElementsByClassName("form-fields")[0];
		let loginPasswordField = loginForm.getElementsByClassName("form-fields")[1];

		let email = loginEmailField.getElementsByClassName("form-control")[0].value;
		let password =
		loginPasswordField.getElementsByClassName("form-control")[0].value;

		// Check whether entered email exists in the DB
		let loginUser = DB_USERS.find(user => user.email === email)
		if (!loginUser) {
			notificationAlert.classList = 'alert alert-warning alert-dismissible fade show'
			notificationText.innerText = 'User with entered email address does not exists. Please Sign Up'
		} else {
			// If enetered email exists in DB, check whether password matches
			if(password === loginUser.password) {
				notificationAlert.classList = 'alert alert-success alert-dismissible fade show'
				notificationText.innerText = 'Access Granted'

				let previousSignUpNavInnerContent = signUpNav.innerHTML
				let previousLoginNavInnerContent = loginNav.innerHTML
		
				signUpNav.innerHTML = `<a class="nav-link">Hi ${loginUser.firstName}</a>`
				loginNav.innerHTML = '<a class="nav-link">Logout</a>'
		
				loginNav.addEventListener('click', () => {
					signUpNav.innerHTML = previousSignUpNavInnerContent
					loginNav.innerHTML = previousLoginNavInnerContent
				})
			} else {
				notificationAlert.classList = 'alert alert-danger alert-dismissible fade show'
				notificationText.innerText = 'Access Denied'
			}
		}

		resetLogin()
		$('#loginModal').modal('hide')

		notificationAlert.style.display = 'block';

		setTimeout(() => {
			notificationAlert.style.display = 'none';
		}, 5000)
	}
}