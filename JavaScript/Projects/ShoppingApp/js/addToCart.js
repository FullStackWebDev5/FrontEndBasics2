const cartItemsLength = document.getElementById('cart-items-length')
const cartItems = []

const addToCart = (id) => {
	cartItems.push(id)
	cartItemsLength.innerText = cartItems.length
}