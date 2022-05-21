let orderBlocks = document.getElementsByClassName('order-block')
let cardheaders = document.getElementsByClassName('card-header')
let parentDiv = document.getElementById('parent-div')
let emptyOrderGif = document.getElementById('empty-order-gif')

const createNewOrderColumn = (orderIdInput) => {
	let colDiv = document.createElement('div')
	let cardDiv = document.createElement('div')
	let cardHeaderDiv = document.createElement('div')
	let cardBodyDiv = document.createElement('div')
	let cardTitleH5 = document.createElement('h5')
	let cardTextP = document.createElement('p')
	let cardOrderStatusSpan = document.createElement('span')
	let cardButtonA = document.createElement('a')
	let cardFooterDiv = document.createElement('div')

	let cardHeaderDivText = document.createTextNode('Order ID: ' + orderIdInput)
	let cardTitleH5Text = document.createTextNode('Bill Amount: $152')
	let cardTextPText = document.createTextNode('Corn Delight Large Size Pizza - 2 Nos')
	let cardButtonAText = document.createTextNode('Cancel Order')
	let cardOrderStatusText = document.createTextNode('PIZZA BAKED')

	parentDiv.appendChild(colDiv)
	colDiv.appendChild(cardDiv)
	cardDiv.appendChild(cardHeaderDiv)
	cardDiv.appendChild(cardBodyDiv)
	cardDiv.appendChild(cardFooterDiv)
	cardBodyDiv.appendChild(cardTitleH5)
	cardBodyDiv.appendChild(cardTextP)
	cardOrderStatusSpan.appendChild(cardOrderStatusText)
	cardBodyDiv.appendChild(cardOrderStatusSpan)
	cardFooterDiv.appendChild(cardButtonA)
	cardTitleH5.appendChild(cardTitleH5Text)

	cardTextP.appendChild(cardTextPText)
	cardButtonA.appendChild(cardButtonAText)
	cardHeaderDiv.appendChild(cardHeaderDivText)
	cardOrderStatusSpan.appendChild(cardOrderStatusText)

	colDiv.classList = 'col-md-4 col-xs-12 order-block'
	cardDiv.classList = 'card text-center'
	cardHeaderDiv.classList = 'card-header'
	cardBodyDiv.classList = 'card-body'
	cardFooterDiv.classList = 'card-footer'
	cardTitleH5.classList = 'card-title'
	cardTextP.classList = 'card-text'
	cardButtonA.classList = 'btn btn-danger cancel-button'
	cardOrderStatusSpan.classList = 'badge rounded-pill bg-success order-status'

	cardOrderStatusSpan.id = orderIdInput

	cardButtonA.addEventListener('click', () => {
		// parentDiv.removeChild(colDiv)
		colDiv.style.display = 'none'
	})
}

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


// ----------------------------------------------------------------

{/* <div class="col-md-4 col-xs-12 order-block">
			<div class="card text-center">
				<div class="card-header">
					Order ID: 2022052222
				</div>
				<div class="card-body">
					<h5 class="card-title">Bill Amount: $152</h5>
					<p class="card-text">
						Corn Delight Large Size Pizza - 2 Nos
					</p>
					<span class="badge rounded-pill bg-success order-status">PIZZA BAKED</span>
				</div>
				<div class="card-footer">
					<a class="btn btn-danger cancel-button">Cancel Order</a>
				</div>
			</div>
		</div> */}

// -------------------------- EXAMPLE --------------------------------------
// let newDiv = document.createElement('div')
// let newH5 = document.createElement('h5')
// let newH5Text = document.createTextNode('We created this HTML part using JS')

// parentDiv.appendChild(newDiv)
// newDiv.appendChild(newH5)
// newH5.appendChild(newH5Text)

// <div>
// 	<h5> We created this HTML part using JS </h5>
// </div>

// ----------------------------------------------------------------
// const executeOrder = () => {
// 	let orderIdInput = document.getElementById('order-id-input').value
// 	cardheaders[orderNumber].innerText = 'Order ID: ' + orderIdInput
// 	orderBlocks[orderNumber].style.display = 'block'
// 	orderNumber++
// }

// ----------------------------------------------------------------