var displayArea = document.getElementById("display");

function isOperator(buttonText) {
  if (
    buttonText == "+" ||
    buttonText == "-" ||
    buttonText == "*" ||
    buttonText == "/" ||
    buttonText == "%"
  )
    return true;
  else return false;
}

/* ---------------------------------------------------------------- */

// function buttonClicked(buttonText) {
//   if(displayArea.innerText.length >= 24)
//     return
//   if (buttonText != "CLR" && buttonText != "DEL" && buttonText != "=") {
//     if (displayArea.innerText === "0") {
//       if (buttonText != "0" && buttonText != "00") {
//         // Don't do anything if button clicked is 0 or 00
//         if (buttonText == "." || isOperator(buttonText)) {
//           //If button clicked is . or any operators, then show it a 0 followed by button clicked (Eg: 0.5, 0+5)
//           displayArea.innerText = displayArea.innerText + buttonText;
//         } else {
//           displayArea.innerText = buttonText;
//         }
//       }
//     } else {
//       if (
//         isOperator(displayArea.innerText[displayArea.innerText.length - 1]) &&
//         isOperator(buttonText)
//       ) {
//         displayArea.innerText =
//           displayArea.innerText.slice(0, -1) + buttonText;
//       } else {
//         displayArea.innerText = displayArea.innerText + buttonText;
//       }
//     }
//   } else {
//     if (buttonText === "CLR") {
//       displayArea.innerText = "0";
//     } else if (buttonText === "DEL") {
//       displayArea.innerText = displayArea.innerText.slice(0, -1);
//     } else {
//       try {
//         displayArea.innerText = eval(displayArea.innerText);
//       } catch (error) {
//         displayArea.innerText = 0;
//       }
//     }
//   }
// }

/* ---------------------------------------------------------------- */

function buttonClicked(buttonText) {
  if(displayArea.innerText.length >= 24)
    return

  if (buttonText === "CLR") {
    displayArea.innerText = "0"
    return
  }

  if (buttonText === "DEL") {
    displayArea.innerText = displayArea.innerText.slice(0, -1)
    return
  }

  if (buttonText === "="){
    try {
      displayArea.innerText = eval(displayArea.innerText);
    } catch (error) {
      displayArea.innerText = 0;
    }
    return
  }

  if (displayArea.innerText === "0") {
    if (buttonText == "0" || buttonText == "00")
      return

    if (buttonText == "." || isOperator(buttonText)) {
      displayArea.innerText = '0' + buttonText;
      return
    }

    displayArea.innerText = buttonText;
  } else {
    if (
      isOperator(displayArea.innerText[displayArea.innerText.length - 1]) &&
      isOperator(buttonText)
    ) {
      displayArea.innerText =
        displayArea.innerText.slice(0, -1) + buttonText
      return
    }

    displayArea.innerText = displayArea.innerText + buttonText;
  }
}

/* ---------------------------------------------------------------- */

// function buttonClicked(buttonText) {
//   if (displayArea.innerText.length >= 24) return;

//   if (buttonText === "CLR") {
//     displayArea.innerText = "0";
//     return;
//   }

//   if (buttonText === "DEL") {
//     displayArea.innerText = displayArea.innerText.slice(0, -1);
//     return;
//   }

//   if (buttonText === "=") {
//     try {
//       displayArea.innerText = eval(displayArea.innerText);
//     } catch (error) {
//       displayArea.innerText = 0;
//     }
//     return;
//   }

//   if (
//     (buttonText == "0" || buttonText == "00") &&
//     displayArea.innerText === "0"
//   )
//     return;

//   if (
//     (buttonText == "." || isOperator(buttonText)) &&
//     displayArea.innerText === "0"
//   ) {
//     displayArea.innerText = "0" + buttonText;
//     return;
//   }

//   if (
//     isOperator(buttonText) &&
//     isOperator(displayArea.innerText[displayArea.innerText.length - 1]) &&
//     displayArea.innerText !== "0"
//   ) {
//     displayArea.innerText = displayArea.innerText.slice(0, -1) + buttonText;
//   }

//   if (displayArea.innerText === "0") {
//     displayArea.innerText = buttonText;
//   } else {
//     displayArea.innerText = displayArea.innerText + buttonText;
//   }
// }

// let x = '2+3*'
// // console.log(isOperator(x[x.length - 1]))

// console.log(x.slice(0,-1))

// console.log(eval('7+8*2'))
