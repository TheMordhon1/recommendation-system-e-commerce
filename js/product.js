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