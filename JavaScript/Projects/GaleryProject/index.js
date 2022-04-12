let panel1 = document.getElementById("panel-1")
let panel2 = document.getElementById("panel-2")
let panel3 = document.getElementById("panel-3")
let panel4 = document.getElementById("panel-4")
let panel5 = document.getElementById("panel-5")

function resetActivePanel(){
  panel1.classList.remove('active')
  panel2.classList.remove('active')
  panel3.classList.remove('active')
  panel4.classList.remove('active')
  panel5.classList.remove('active')
}

function selectPanel(panelId){
  resetActivePanel()
  document.getElementById(panelId).classList.add('active')
}

// switch(panelNo){
//   case 1:
//     panel1.classList.add('active')
//     break;
//   case 2:
//     panel2.classList.add('active')
//     break;
//   case 3:
//     panel3.classList.add('active')
//     break;
//   case 4:
//     panel4.classList.add('active')
//     break;
//   case 5:
//     panel5.classList.add('active')
//     break;
// }

// var panels = document.getElementsByClassName("panel")