let state = {
	currentNavLinkSelected: 'home',
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	city: '',
	state: '',
	zip: '',
	agreedToTnC: false,
}

// DOM Node Selection
let homeNavLink = document.getElementById("home-nav-link")
let signUpNavLink = document.getElementById("signup-nav-link")
let loginNavLink = document.getElementById("login-nav-link")

let homePage = document.getElementById("home-page")
let signUpPage = document.getElementById("signup-page")
let loginPage = document.getElementById("login-page")

const changeActiveNavlink = (navLinkClicked) => {
	homeNavLink.classList.remove("active")
	signUpNavLink.classList.remove("active")
	loginNavLink.classList.remove("active")
	homePage.style.display = 'none'
	signUpPage.style.display = 'none'
	loginPage.style.display = 'none'

	switch(navLinkClicked){
		case 'HOME':
			homeNavLink.classList.add("active")
			homePage.style.display = 'block'
			break
		case 'SIGN_UP':
			signUpNavLink.classList.add("active")
			signUpPage.style.display = 'block'
			break
		case 'LOGIN':
			loginNavLink.classList.add("active")
			loginPage.style.display = 'block'
			break
	}
}

let signUpEmail = document.getElementById('signUpEmail')
let signUpPassword = document.getElementById('signUpPassword')
let loginEmail = document.getElementById('loginEmail')
let loginPassword = document.getElementById('loginPassword')

let validAlert = document.getElementById('valid-alert')
let invalidAlert = document.getElementById('invalid-alert')

const lookup = {
  'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
  'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
  'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
  'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
  'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
  'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
  'Y': 'L', 'Z': 'M',
  'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
  'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
  'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
  'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
  'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
  'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
  'y': 'l', 'z': 'm',
  '0': '5', '1': '6', '2': '7', '3': '8',
  '4': '9', '5': '0', '6': '1', '7': '2',
  '8': '3', '9': '4',
  '!': '#', '$': '%', '&': '+', '-': '@',
  '_': '~', '#': '!', '%': '$', '+': '&',
  '@': '-', '~': '_'
}

const encode = (inputString) => {
  const lookupKeys = Object.keys(lookup)
  const lookupValues = Object.values(lookup)
  const codeArr = inputString.split("")
  let encodedArr = codeArr.map(codeArrChar => {
    let index = lookupValues.findIndex((element) => element === codeArrChar)
    return lookupKeys[index]
  })
  return encodedArr.join("")
}

const decode = (encodedStr) => {
  const codeArr = encodedStr.split("")
  let decodedArr = codeArr.map(codeArrChar => lookup[codeArrChar])
  return decodedArr.join("")
}

const signUp = () => {
  let inputPassword = signUpPassword.value
  state.password = encode(inputPassword)
	validAlert.innerText = 'Password successfully changed!'
	validAlert.style.display = 'block'
	setTimeout(() => {
		validAlert.style.display = 'none'
	}, 3000)
  console.log(state)
}

const logIn = () => {
  let inputPassword = loginPassword.value
  if(inputPassword === decode(state.password)){
    loginValid.style.display = 'block'
    loginInvalid.style.display = 'none'
  } else {
    loginInvalid.style.display = 'block'
    loginValid.style.display = 'none'
  }
}