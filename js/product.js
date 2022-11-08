console.log("Product.js");

// goal: product.html?id=5

const queryString = window.location.search;
console.log(queryString);

// goal: get id number
const queries = queryString.split("=");
// ["?id", "5"]
const id = parseInt(queries[1]);
console.log(id)

const product = document.querySelector('.product-details');
const productPicZoom = document.querySelector('.product-pic-zoom');
const productContent = document.querySelector('.product-content');

const getItemById = (id) => {
	return allItems.find((item) => {
		return item.id === id
	})
}

const showProductPicZoom = (id) => {
	return `
	<img class="product-big-img" src="${getItemById(id).img}" alt="">
	<div class="zoom-icon">
		<i class="fa fa-search-plus"></i>
	</div>
	`
}
productPicZoom.innerHTML = showProductPicZoom(id)

const showProduct = (id) => {
	const item = getItemById(id)
	return `
		<div class="pd-title">
			<span>Geek Stuff</span>
			<h3>${item.title}</h3>
			<a href="#" class="heart-icon"><i class="icon_heart_alt"></i></a>
		</div>
		<div class="pd-rating">
			<i class="fa fa-star"></i>
			<i class="fa fa-star"></i>
			<i class="fa fa-star"></i>
			<i class="fa fa-star"></i>
			<i class="fa fa-star-o"></i>
			<span>(5)</span>
		</div>
		<div class="pd-desc">
			<p>Lorem ipsum dolor sit amet, consectetur ing elit, sed do eiusmod tempor sum dolor
				sit amet, consectetur adipisicing elit, sed do mod tempor</p>
			<h4>$${item.price}<span>${item.price * 10}</span></h4>
		</div>
		<div class="pd-color">
			<h6>Color</h6>
			<div class="pd-color-choose">
				<div class="cc-item">
					<input type="radio" id="cc-black">
					<label for="cc-black"></label>
				</div>
				<div class="cc-item">
					<input type="radio" id="cc-yellow">
					<label for="cc-yellow" class="cc-yellow"></label>
				</div>
				<div class="cc-item">
					<input type="radio" id="cc-violet">
					<label for="cc-violet" class="cc-violet"></label>
				</div>
			</div>
		</div>
		<div class="pd-size-choose">
			<div class="sc-item">
				<input type="radio" id="sm-size">
				<label for="sm-size">s</label>
			</div>
			<div class="sc-item">
				<input type="radio" id="md-size">
				<label for="md-size">m</label>
			</div>
			<div class="sc-item">
				<input type="radio" id="lg-size">
				<label for="lg-size">l</label>
			</div>
			<div class="sc-item">
				<input type="radio" id="xl-size">
				<label for="xl-size">xs</label>
			</div>
		</div>
		<div class="quantity">
			<div class="pro-qty">
				<input type="text" value="1">
			</div>
			<a href="#" class="primary-btn pd-cart">Add To Cart</a>
		</div>
		<ul class="pd-tags">
			<li><span>CATEGORIES</span>: More Accessories, Wallets & Cases</li>
			<li><span>TAGS</span>: Clothing, T-shirt, Woman</li>
		</ul>
		<div class="pd-share">
			<div class="p-code">Sku : 00012</div>
			<div class="pd-social">
				<a href="#"><i class="ti-facebook"></i></a>
				<a href="#"><i class="ti-twitter-alt"></i></a>
				<a href="#"><i class="ti-linkedin"></i></a>
			</div>
		</div>
	`
};
product.innerHTML = showProduct(id);

const showProductContent = (id) => {
	return`
	<div class="row">
		<div class="col-lg-7">
			<h5>Introduction</h5>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
				ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
			<h5>Features</h5>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
				ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
		</div>
		<div class="col-lg-5">
			<img src="${getItemById(id).img}" alt="">
		</div>
	</div>
	`
}
productContent.innerHTML = showProductContent(id);
