let passwordStoredInDB = ''

let signupInputPasswordField = document.getElementById('sign-up-input')
let passwordStrength = document.getElementById('password-strength')
let signUpValid = document.getElementById('sign-up-valid')
let loginInputPasswordField = document.getElementById('login-input')
let loginValid = document.getElementById('login-valid')
let loginInvalid = document.getElementById('login-invalid')

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



const checkPasswordStrength = () => {
  if(signupInputPasswordField.value.length < 5){
    passwordStrength.style.display = 'block'
    passwordStrength.innerText = 'Weak'
    passwordStrength.style.color = 'red'
  } else if (signupInputPasswordField.value.length < 8) {
    passwordStrength.style.display = 'block'
    passwordStrength.innerText = 'Moderate'
    passwordStrength.style.color = 'orange'
  } else {
    passwordStrength.style.display = 'block'
    passwordStrength.innerText = 'Strong'
    passwordStrength.style.color = 'green'
  }
}

const signUp = () => {
  let inputPassword = signupInputPasswordField.value
  passwordStoredInDB = encode(inputPassword)
  signUpValid.style.display = 'block'

  console.log(passwordStoredInDB)
}

const logIn = () => {
  let inputPassword = loginInputPasswordField.value
  if(inputPassword === decode(passwordStoredInDB)){
    loginValid.style.display = 'block'
    loginInvalid.style.display = 'none'
  } else {
    loginInvalid.style.display = 'block'
    loginValid.style.display = 'none'
  }
}