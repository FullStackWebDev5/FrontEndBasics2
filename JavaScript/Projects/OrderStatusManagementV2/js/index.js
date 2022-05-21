let orderNumber = 0
let orderBlocks = document.getElementsByClassName('order-block')
let cardheaders = document.getElementsByClassName('card-header')
let parentDiv = document.getElementById('parent-div')

const createNewOrderColumn = (orderIdInput) => {
	let colDiv = document.createElement('div')
	let cardDiv = document.createElement('div')
	let cardHeaderDiv = document.createElement('div')
	let cardBodyDiv = document.createElement('div')
	let cardTitleH5 = document.createElement('h5')
	let cardTextP = document.createElement('p')
	let cardButtonA = document.createElement('a')
	let cardFooterDiv = document.createElement('div')

	let cardHeaderDivText = document.createTextNode('Order ID: ' + orderIdInput)
	let cardTitleH5Text = document.createTextNode('Bill Amount: ')
	let cardTextPText = document.createTextNode('Items: XYZ, ABC, ASD')
	let cardButtonAText = document.createTextNode('Cancel Order')
	let cardFooterDivText = document.createTextNode('PIZZA BAKED')

	parentDiv.appendChild(colDiv)
	colDiv.appendChild(cardDiv)
	cardDiv.appendChild(cardHeaderDiv)
	cardDiv.appendChild(cardBodyDiv)
	cardDiv.appendChild(cardFooterDiv)
	cardBodyDiv.appendChild(cardTitleH5)
	cardBodyDiv.appendChild(cardTextP)
	cardBodyDiv.appendChild(cardButtonA)
	cardTitleH5.appendChild(cardTitleH5Text)

	cardTextP.appendChild(cardTextPText)
	cardButtonA.appendChild(cardButtonAText)
	cardHeaderDiv.appendChild(cardHeaderDivText)
	cardFooterDiv.appendChild(cardFooterDivText)

	colDiv.classList = 'col-md-4 col-xs-12 order-block'
	cardDiv.classList = 'card text-center'
	cardHeaderDiv.classList = 'card-header'
	cardBodyDiv.classList = 'card-body'
	cardFooterDiv.classList = 'card-footer'
	cardTitleH5.classList = 'card-title'
	cardTextP.classList = 'card-text'
	cardButtonA.classList = 'btn btn-danger'
}

const executeOrder = () => {
	let orderIdInput = document.getElementById('order-id-input').value
	createNewOrderColumn(orderIdInput)

	console.log('Order Placed')
	chefReceived()
		.then(pizzaSauceAdded)
		.then(firstLayerOfCheezeAdded)
		.then(toppingsAdded)
		.then(secondLayerOfCheezeAdded)
		.then(pizzaBaked)
		.then(oreganoAdded)
		.then(packageReceivedAtCounter)
		.then(() => console.log('The order is ready and handed over to the Zomato guy!'))
		.catch((err) => console.log(err))
}


// ----------------------------------------------------------------

{/* <div class="col-md-4 col-xs-12 order-block">
	<div class="card text-center">
		<div class="card-header"></div>
		<div class="card-body">
			<h5 class="card-title"></h5>
			<p class="card-text"></p>
			<a class="btn btn-danger"></a>
		</div>
		<div class="card-footer"></div>
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