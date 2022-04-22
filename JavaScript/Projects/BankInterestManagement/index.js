/* 
  Take input of bank balances of 5 account holders as I/P
  If the balance > 2L -> Add an interest of 10% and deduct 0.2% maintence charge 
  If the balance > 1L -> Add an interest of 5% and deduct 0.05% maintence charge
  If any balance less than or equals 1L -> Give 3% interest

  Log/Alert updated array of balances
*/

/* --- Answer ---- */

// let bankBalance1 = document.getElementById('bank-balance-1').value
// console.log(bankBalance1)

// let bankBalance1 = Number(prompt('Enter the first bank balance'))
// let bankBalance2 = Number(prompt('Enter the second bank balance'))
// let bankBalance3 = Number(prompt('Enter the third bank balance'))
// let bankBalance4 = Number(prompt('Enter the fourth bank balance'))
// let bankBalance5 = Number(prompt('Enter the fifth bank balance'))

// let bankBalances = prompt("Enter all bank balances separated by a ','").split(',')

// for(let i = 0; i < bankBalances.length; i++){
//   bankBalances[i] = Number(bankBalances[i])
//   if(bankBalances[i] > 200000){
//     bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.1
//     bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.002
//   } else if (bankBalances[i] > 100000 ) {
//     bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.05
//     bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.0005
//   } else {
//     bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.03
//   }
// }

// console.log(bankBalances)

/* ---------------------------------------------------------------- */

// function calculateInterest () {
//   let bankBalance1 = Number(document.getElementById('bank-balance-1').value)
//   let bankBalance2 = Number(document.getElementById('bank-balance-2').value)
//   let bankBalance3 = Number(document.getElementById('bank-balance-3').value)

//   let updateBankBalance1 = document.getElementById('updated-bank-balance-1')
//   let updateBankBalance2 = document.getElementById('updated-bank-balance-2')
//   let updateBankBalance3 = document.getElementById('updated-bank-balance-3')

//   let bankBalances = [bankBalance1, bankBalance2, bankBalance3]

//   for(let i = 0; i < bankBalances.length; i++){
//     bankBalances[i] = Number(bankBalances[i])
//     if(bankBalances[i] > 200000){
//       bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.1
//       bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.002
//     } else if (bankBalances[i] > 100000 ) {
//       bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.05
//       bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.0005
//     } else {
//       bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.03
//     }
//   }

//   updateBankBalance1.value = bankBalances[0]
//   updateBankBalance2.value = bankBalances[1]
//   updateBankBalance3.value = bankBalances[2]
// }

/* ---------------------------------------------------------------- */

function calculateInterest() {
  let inputBalanceNodes = document.getElementsByClassName("input-balance");
  let displayUpdatedBalances = document.getElementsByClassName("display-updated-balance");

  let bankBalances = []

  for (let i = 0; i < inputBalanceNodes.length; i++) {
    bankBalances[i] = Number(inputBalanceNodes[i].value);
    if(bankBalances[i] > 200000){
      bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.1
      bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.002
    } else if (bankBalances[i] > 100000 ) {
      bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.05
      bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.0005
    } else {
      bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.03
    }
    displayUpdatedBalances[i].value = bankBalances[i]
  }
}

/* ---------------------------------------------------------------- */

function calculateInterest() {
  let inputBalanceNodes = document.getElementsByClassName("input-balance");
  let displayUpdatedBalances = document.getElementsByClassName("display-updated-balance");

  let temp

  for (let i = 0; i < inputBalanceNodes.length; i++) {
    temp = Number(inputBalanceNodes[i].value);
    if(temp > 200000){
      temp = temp + temp * 0.1
      temp = temp - temp * 0.002
    } else if (temp > 100000 ) {
      temp = temp + temp * 0.05
      temp = temp - temp * 0.0005
    } else {
      temp = temp + temp * 0.03
    }
    displayUpdatedBalances[i].value = temp
  }
}
