let orderNumber = 0
let orderBlocks = document.getElementsByClassName('order-block')

const executeOrder = () => {
	let orderIdInput = document.getElementById('order-id-input').value
	document.getElementById('order-id-display-1').innerText = 'Order ID: ' + orderIdInput
	orderBlocks[orderNumber].style.display = 'block'
	orderNumber++
}