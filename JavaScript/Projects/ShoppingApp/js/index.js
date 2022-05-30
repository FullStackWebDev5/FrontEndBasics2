const fetchProducts = async () => {
	const res = await fetch('https://fakestoreapi.com/products')
	const data = await res.json()
	console.log(data)

	data.forEach(product => createProductDiv(product))
}

// const fetchProducts = () => {
// 	fetch('https://fakestoreapi.com/products')
// 		.then((response) => response.json())
// 		.then((data) => console.log(data))
// 		.catch(err => console.log(err))
// }