// CALLBACK HELL
const orderIdInfo = document.getElementById('order-id-info')
let statusBlocks = document.getElementsByClassName('status-block')

const addDoneClass = (index) => statusBlocks[index].classList.add('done')

const executeOrder = (callback) => {
	const orderId = document.getElementById('order-id-input').value
	orderIdInfo.innerText = 'Status for Order ID: ' + orderId
	let x = 0
	addDoneClass(x++)

	setTimeout(() => {
		addDoneClass(x++)

		setTimeout(() => {
			addDoneClass(x++)

			setTimeout(() => {
				addDoneClass(x++)

				setTimeout(() => {
					addDoneClass(x++)

					setTimeout(() => {
						addDoneClass(x++)
						
						setTimeout(() => {
							addDoneClass(x++)

							setTimeout(() => {
								addDoneClass(x++)

								setTimeout(() => {
									addDoneClass(x++)
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