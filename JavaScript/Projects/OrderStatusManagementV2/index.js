let orderNumber = 0
let orderBlocks = document.getElementsByClassName('order-block')
let cardheaders = document.getElementsByClassName('card-header')

const executeOrder = () => {
	let orderIdInput = document.getElementById('order-id-input').value
	cardheaders[orderNumber].innerText = 'Order ID: ' + orderIdInput
	orderBlocks[orderNumber].style.display = 'block'
	orderNumber++
}