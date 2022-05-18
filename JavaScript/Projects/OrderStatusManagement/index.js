// CALLBACK HELL
const orderIdInfo = document.getElementById('order-id-info')
let statusBlocks = document.getElementsByClassName('status-block')

const addDoneClass = (index) => statusBlocks[index].classList.add('done')

const executeOrder = (callback) => {
	const orderId = document.getElementById('order-id-input').value
	orderIdInfo.innerText = 'Status for Order ID: ' + orderId
	addDoneClass(0)

	setTimeout(() => {
		addDoneClass(1)

		setTimeout(() => {
			addDoneClass(2)

			setTimeout(() => {
				addDoneClass(3)

				setTimeout(() => {
					addDoneClass(4)

					setTimeout(() => {
						addDoneClass(5)
						
						setTimeout(() => {
							addDoneClass(6)

							setTimeout(() => {
								addDoneClass(7)

								setTimeout(() => {
									addDoneClass(8)
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