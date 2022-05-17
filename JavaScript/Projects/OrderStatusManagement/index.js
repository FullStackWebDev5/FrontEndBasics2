// CALLBACK HELL
const executeOrder = (callback) => {
	const orderNo = document.getElementById('order-id-input').value
	console.log(orderNo + ': Order Placed')

	setTimeout(() => {
		console.log(orderNo + ': Chef received the order and started preparing')

		setTimeout(() => {
			console.log(orderNo + ': Pizza Sauce added')

			setTimeout(() => {
				console.log(orderNo + ': First layer of cheeze added')

				setTimeout(() => {
					console.log(orderNo + ': Toppings added')

					setTimeout(() => {
						console.log(orderNo + ': Second layer of cheeze added')
						
						setTimeout(() => {
							console.log(orderNo + ': Pizza baked!')

							setTimeout(() => {
								console.log(orderNo + ': Oregano added and packed')

								setTimeout(() => {
									console.log(orderNo + ': Package received at counter')
									callback()
								}, 2000)

							}, 8000)

						}, 15000)

					}, 5000)

				}, 12000)

			}, 5000)

		}, 10000)
		
	}, 2000)
}