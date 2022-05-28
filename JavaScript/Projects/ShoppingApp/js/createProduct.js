const createProductDiv = () => {
	const colDiv = document.createElement('div')
	const productDiv = document.createElement('div')
	const productImg = document.createElement('img')
	const productBody = document.createElement('div')
	const productHeader = document.createElement('div')
	const productTitle = document.createElement('h5')
	const productPrice = document.createElement('h4')
	const productDescription = document.createElement('p')
	const ratingStar1 = document.createElement('span')
	const ratingStar2 = document.createElement('span')
	const ratingStar3 = document.createElement('span')
	const ratingStar4 = document.createElement('span')
	const ratingStar5 = document.createElement('span')
	const ratingCount = document.createElement('span')
	const cardButtonOuter = document.createElement('div')
	const addToCardButton = document.createElement('a')
	const buyButton = document.createElement('a')
}

<div class="col-md-3">
	<div class="card product">
		<img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" class="card-img-top" alt="...">
		<div class="card-body">
			<div class="product-header">
				<h5 class="card-title">Card title</h5>
				<h4 class="card-title product-price">$30</h4>
			</div>
			<p class="card-text">Some quick example text to build on the card title ...</p>
			<span class="fa fa-star checked"></span>
			<span class="fa fa-star checked"></span>
			<span class="fa fa-star checked"></span>
			<span class="fa fa-star checked"></span>
			<span class="fa fa-star"></span>
			<span class='rating-count'>(102)</span>
			<div class="btn-outer">
				<a href="#" class="btn btn-primary">Add to cart</a>
				<a href="#" class="btn btn-primary buy-btn">Buy now</a>
			</div>
		</div>
	</div>
</div>