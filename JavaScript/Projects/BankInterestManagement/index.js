/* 
  Take input of bank balances of 5 account holders as I/P
  If the balance > 2L -> Add an interest of 10% and deduct 0.2% maintence charge 
  If the balance > 1L -> Add an interest of 5% and deduct 0.05% maintence charge
  If any balance less than or equals 1L -> Give 3% interest

  Log/Alert updated array of balances
*/

/* --- Answer ---- */

// let bankBalance1 = Number(prompt('Enter the first bank balance'))
// let bankBalance2 = Number(prompt('Enter the second bank balance'))
// let bankBalance3 = Number(prompt('Enter the third bank balance'))
// let bankBalance4 = Number(prompt('Enter the fourth bank balance'))
// let bankBalance5 = Number(prompt('Enter the fifth bank balance'))

let bankBalances = [249389, 34561, 3462, 242442, 100001]
//prompt("Enter all bank balances separated by a ','").split(',')

for(let i = 0; i < bankBalances.length; i++){
  if(bankBalances[i] > 200000){
    bankBalances[i] = Number(bankBalances[i])
    bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.1
    bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.002
  }
}

console.log(bankBalances)