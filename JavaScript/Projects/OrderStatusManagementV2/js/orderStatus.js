const chefReceived = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Chef received'
			resolve(orderNumber)
		}, 2000)
	})
}

const pizzaSauceAdded = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Pizza Sauce added'
			resolve(orderNumber)
		}, 10000)
	})
}

const firstLayerOfCheezeAdded = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'First layer of cheeze added'
			resolve(orderNumber)
		}, 5000)
	})
}

const toppingsAdded = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Toppings added'
			resolve(orderNumber)
		}, 12000)
	})
}

const secondLayerOfCheezeAdded = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Second layer of cheeze added'
			resolve(orderNumber)
		}, 5000)
	})
}

const pizzaBaked = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Pizza baked'
			resolve(orderNumber)
		}, 15000)
	})
}

const oreganoAdded = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Oregano added and packed'
			resolve(orderNumber)
		}, 8000)
	})
}

const packageReceivedAtCounter = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Package received at counter'
			resolve(orderNumber)
		}, 2000)
	})
}