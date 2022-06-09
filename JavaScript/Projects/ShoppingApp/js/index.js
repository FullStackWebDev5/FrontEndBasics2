let globalProducts = []
const productsSpinner = document.getElementById('products-spinner')

const fetchProducts = async () => {
	const res = await fetch('https://fakestoreapi.com/products')
	const data = await res.json()

	globalProducts = data

	productsSpinner.style.display = 'none'
	data.forEach(product => createProductDiv(product))
}

// const fetchProducts = () => {
// 	fetch('https://fakestoreapi.com/products')
// 		.then((response) => response.json())
// 		.then((data) => console.log(data))
// 		.catch(err => console.log(err))
// }