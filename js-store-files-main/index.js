import { getCookie } from "./utils/cookie.js";
import { getData } from "./utils/httpReq.js";
import { shortenText } from "./utils/stringFuck.js";
const productElement = document.getElementById("product");
const searchInput = document.getElementById("input-pr");
const loader = document.getElementById("loader");
const dashboard = document.getElementById("dashboard");
const login = document.getElementById("login");
const searchIcon = document.getElementById("search-icon");
const modalButton = document.getElementById("modal-button");
const error = document.querySelector(".error");
const listFilter = document.querySelectorAll("li");
let allProduct = null;
let search = "";
let category = "all";
const showProduct = async (data) => {
	productElement.innerHTML = "";
	data.forEach((pr) => {
		const jsx = `
			<div>
				<img src=${pr.image} alt=${pr.title}/>
				<h4>${shortenText(pr.title)}</h4>
				<div id="price">
					<p>$ ${pr.price}</p>
					<button>
						Buy
						<i class="fa-solid fa-cart-shopping"></i>
					</button>
				</div>
				<div id="rate">
					<span>${pr.rating.rate}</span>
					<i class="fa-solid fa-star"></i>
				</div>
				<div id="count">
					<span>${pr.rating.count}</span>
					<i class="fa-solid fa-user"></i>
				</div>
			</div>
		`;
		productElement.innerHTML += jsx;
	});
};
const init = async () => {
	const cookie = getCookie();
	if (cookie) {
		login.style.display = "none";
	} else if (!cookie) {
		dashboard.style.display = "none";
	}
	allProduct = await getData("products");
	showProduct(allProduct);
};

const filteredProducts = () => {
	// let filteredProduct = null;
	const filteredProduct = allProduct.filter((p) => {
		if (category === "all") {
			return p.title.toLowerCase().includes(search);
		} else {
			return (
				p.title.toLowerCase().includes(search) &&
				p.category.toLowerCase() === category
			);
		}
	});
	showProduct(filteredProduct);
};
const searchHandler = () => {
	search = searchInput.value.toLowerCase().trim();
	filteredProducts();
};
const filterHandler = (event) => {
	category = event.target.innerText.toLowerCase();
	listFilter.forEach((li) => {
		if (li.innerText.toLowerCase() === category) {
			li.className = "selected";
		} else {
			li.className = "";
		}
	});
	filteredProducts();
};
listFilter.forEach((list) => {
	list.addEventListener("click", filterHandler);
});
searchIcon.addEventListener("click", searchHandler);
document.addEventListener("DOMContentLoaded", init);
