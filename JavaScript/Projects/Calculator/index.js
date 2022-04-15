var displayArea = document.getElementById('display')

function isOperator(buttonText){
  if(buttonText == '+' || buttonText == '-' || buttonText == '*' || buttonText == '/' || buttonText == '%')
    return true
  else 
    return false
}

function buttonClicked(buttonText){
  if(displayArea.innerText === '0'){
    if(buttonText != '0' && buttonText != '00'){ // Don't do anything if button clicked is 0 or 00
      if(buttonText == '.' || isOperator(buttonText)){ 
        //If button clicked is . or any operators, then show it a 0 followed by button clicked (Eg: 0.5, 0+5)
        displayArea.innerText = displayArea.innerText + buttonText
      } else {
        displayArea.innerText = buttonText
      }
    }
  } else {
    if(isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && isOperator((buttonText))){
      //  replace the operator
    } else {
      displayArea.innerText = displayArea.innerText + buttonText
    }
  }
}

