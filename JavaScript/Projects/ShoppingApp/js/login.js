const login = () => {
	let isValid = loginValidate(true)

	if (isValid) {
		let loginEmailField = loginForm.getElementsByClassName("form-fields")[0];
		let loginPasswordField = loginForm.getElementsByClassName("form-fields")[1];

		let email = loginEmailField.getElementsByClassName("form-control")[0].value;
		let password =
		loginPasswordField.getElementsByClassName("form-control")[0].value;


		// LOGIC
		// DB_SINGLE_USER_EMAIL = 'ankit@gmail.com'
		// DB_SINGLE_USER_PASSWORD = '12345678'
		// if(email === DB_SINGLE_USER_EMAIL && password === DB_SINGLE_USER_PASSWORD) {
		// 	console.log('Access Granted')
		// } else {
		// 	console.log('Access Denied')
		// }
	}
}