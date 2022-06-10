const cartItemsLength = document.getElementById('cart-items-length')
let cartItemIds = []

const addToCart = (id) => {
	cartItemIds.push(id)
	cartItemsLength.innerText = cartItemIds.length
	let cartItem = globalProducts.find(product => product.id == id)
	createItemsInCart(cartItem)
}