const chefReceived = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Chef received the order and started preparing')
			resolve()
		}, 2000)
	})
}

const pizzaSauceAdded = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Pizza Sauce added')
			resolve()
		}, 10000)
	})
}

const firstLayerOfCheezeAdded = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('First layer of cheeze added')
			resolve()
		}, 5000)
	})
}

const toppingsAdded = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Toppings added')
			resolve()
		}, 12000)
	})
}

const secondLayerOfCheezeAdded = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Second layer of cheeze added')
			resolve()
		}, 5000)
	})
}

const pizzaBaked = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Pizza baked!')
			resolve()
		}, 15000)
	})
}

const oreganoAdded = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Oregano added and packed')
			resolve()
		}, 8000)
	})
}

const packageReceivedAtCounter = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Package received at counter')
			resolve()
		}, 2000)
	})
}