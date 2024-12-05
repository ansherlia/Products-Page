import authoration from "./utils/authoration.js";
import { getData } from "./utils/httpReq.js";
const container = document.getElementById("container");
const logout = document.getElementById("button-logout");
const init = async () => {
	authoration();
	const get = await getData("users");
	showUsers(get);
};
const showUsers = (data) => {
	container.innerHTML = "";
	data.forEach((us) => {
		const jsx = `
			<div>
				<h1>${us.id}</h1>
				<div  class="details">
					<div>	
						<i class="fa-solid fa-user"></i>
						Name:
					</div>
					<p>${us.name.firstname} ${us.name.lastname}</p>
				</div>
				<div class="details">
					<div>	
					<i class="fa-solid fa-address-card"></i>
						Username:
					</div>
					<p>${us.username}</p>
				</div>
				<div class="details">
					<div>	
						<i class="fa-solid fa-envelope"></i>
						Email:
					</div>
					<p>${us.email}</p>
				</div>
				<div class="details">
					<div> 	
						<i class="fa-solid fa-phone"></i>
						Phone:
					</div>
					<p>${us.phone}</p>
				</div>
				<div class="details">
					<div>	
						<i class="fa-solid fa-address-book"></i>
						Address:
					</div>
					<p>${us.address.city} ${us.address.street} ${us.address.zipcode} </p>
				</div>
			</div>
			`;
		container.innerHTML += jsx;
	});
};
const logoutHandler = () => {
	document.cookie = `token=${""}; max-age=${0}; path=/`;
	location.assign("index.html")

};

logout.addEventListener("click", logoutHandler);
document.addEventListener("DOMContentLoaded", init);
