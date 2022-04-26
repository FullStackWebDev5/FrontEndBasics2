let firstNameValid = document.getElementById("firstNameValid")
let firstNameInvalid = document.getElementById("firstNameInvalid")
let lastNameValid = document.getElementById("lastNameValid")
let lastNameInvalid = document.getElementById("lastNameInvalid")
let emailValid = document.getElementById("emailValid")
let emailInvalid = document.getElementById("emailInvalid")
let phoneValid = document.getElementById("phoneValid")
let phoneInvalid = document.getElementById("phoneInvalid")
let zipCodeValid = document.getElementById("zipCodeValid")
let zipCodeInvalid = document.getElementById("zipCodeInvalid")
let tnCInvalid = document.getElementById("tnCInvalid")
let stateValid = document.getElementById("stateValid")
let stateInvalid = document.getElementById("stateInvalid")

function validate() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let state = document.getElementById("state").value;
  let zipCode = document.getElementById("zipCode").value;
  let tNCCheckBox = document.getElementById("tNCCheckBox").checked;

  if (firstName === ''){
    firstNameInvalid.style.display = 'block'
    firstNameValid.style.display = 'none'
  } else {
    firstNameValid.style.display = 'block'
    firstNameInvalid.style.display = 'none'
  }

  if(lastName === ''){
    lastNameInvalid.style.display = 'block'
    lastNameValid.style.display = 'none'
  } else {
    lastNameValid.style.display = 'block'
    lastNameInvalid.style.display = 'none'
  }

  if(email === '' || !email.includes('@') || !email.includes('.') || email.startsWith('@') || email.slice(email.lastIndexOf('.') + 1).length < 2) {
    emailInvalid.style.display = 'block'
    emailValid.style.display = 'none'
  } else {
    emailValid.style.display = 'block'
    emailInvalid.style.display = 'none'
  }

  if(phoneNumber === '' || phoneNumber.length != 10 || Number(phoneNumber[0]) < 6 ){
    phoneInvalid.style.display = 'block'
    phoneValid.style.display = 'none'
  } else {
    phoneValid.style.display = 'block'
    phoneInvalid.style.display = 'none'
  }

  if(zipCode === '' || zipCode.length != 6){
    zipCodeInvalid.style.display = 'block'
    zipCodeValid.style.display = 'none'
  } else {
    zipCodeValid.style.display = 'block'
    zipCodeInvalid.style.display = 'none'
  }

  if(!tNCCheckBox){
    tnCInvalid.style.display = 'block'
  } else {
    tnCInvalid.style.display = 'none'
  }

  if(state === ''){
    stateInvalid.style.display = 'block'
    stateValid.style.display = 'none'
  } else {
    stateValid.style.display = 'block'
    stateInvalid.style.display = 'none'
  }
}

