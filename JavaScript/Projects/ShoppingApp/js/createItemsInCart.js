let cartItemsBody = document.getElementById('cart-items-body')

const createItemsInCart = (cartItem) => {
	const productDiv = document.createElement('div')
	const cartItemRow = document.createElement('div')
	const cartItemCol1 = document.createElement('div')
	const cartItemCol2 = document.createElement('div')
	const productImg = document.createElement('img')
	const productBody = document.createElement('div')
	const productHeader = document.createElement('div')
	const productTitle = document.createElement('h6')
	const productPrice = document.createElement('h5')
	const cardButtonOuter = document.createElement('div')
	const removeFromCart = document.createElement('a')

	productDiv.classList = 'card product'
	cartItemRow.classList = 'row'
	cartItemCol1.classList = 'col-md-6'
	cartItemCol2.classList = 'col-md-6'
	productImg.classList = 'card-img-top cart-item-img'
	productBody.classList = 'card-body'
	productHeader.classList = 'product-header'
	productTitle.classList = 'card-title'
	productPrice.classList = 'card-title product-price'
	cardButtonOuter.classList = 'btn-outer'
	removeFromCart.classList = 'btn btn-primary buy-btn'

	productDiv.id = `cart-item-${cartItem.id}`

	productTitle.innerText = `${cartItem.title.slice(0, 20)}...`
	productPrice.innerText = `$${cartItem.price}`
	removeFromCart.innerText = 'Remove from Cart'

	productImg.src = cartItem.image
	productImg.alt = 'product-img'

	productDiv.appendChild(cartItemRow)
	cartItemRow.appendChild(cartItemCol1)
	cartItemRow.appendChild(cartItemCol2)
	cartItemCol1.appendChild(productImg)
	cartItemCol2.appendChild(productBody)
	productBody.appendChild(productHeader)
	productHeader.appendChild(productTitle)
	productHeader.appendChild(productPrice)
	productBody.appendChild(cardButtonOuter)
	cardButtonOuter.appendChild(removeFromCart)

	cartItemsBody.appendChild(productDiv)

	removeFromCart.addEventListener('click', function () {
		console.log('Removing from cart ', cartItem.id)
	})
}

{/* <div class="card product">
	<div class="row">
		<div class="col-md-6">
			<img class="card-img-top cart-item-img" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
				alt="product-img">
		</div>
		<div class="col-md-6">
			<div class="card-body">
				<div class="product-header">
					<h6 class="card-title">Fjallraven - Foldsac...</h6>
					<h5 class="card-title product-price">$109.95</h5>
				</div>
				<div class="btn-outer"><a class="btn btn-primary buy-btn">Remove from cart</a></div>
			</div>
		</div>
	</div>
</div> */}