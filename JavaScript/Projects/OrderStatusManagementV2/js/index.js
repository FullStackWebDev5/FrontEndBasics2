let emptyOrderGif = document.getElementById('empty-order-gif')

const executeOrder = () => {
	emptyOrderGif.style.display = 'none'

	let orderIdInput = document.getElementById('order-id-input').value

	if(!orderIdInput.length){
		alert('Please enter a valid order ID')
		return
	}

	createNewOrderColumn(orderIdInput)

	document.getElementById(orderIdInput).innerText = 'Order Placed!'

	chefReceived(orderIdInput)
		.then(pizzaSauceAdded)
		.then(firstLayerOfCheezeAdded)
		.then(toppingsAdded)
		.then(secondLayerOfCheezeAdded)
		.then(pizzaBaked)
		.then(oreganoAdded)
		.then(packageReceivedAtCounter)
		.then(() => document.getElementById(orderIdInput).innerText = 'Order Ready!')
		.catch((err) => console.log(err))
}