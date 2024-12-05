import { setCookie } from "./utils/cookie.js";

import { postData } from "./utils/httpReq.js";
import authoration from "./utils/authoration.js";
import { validation } from "./utils/validation.js";
const inputsLogin = document.querySelectorAll("input");
const buttonLogin = document.querySelector("button");
const modalButton = document.getElementById("modal-button");
const loader = document.getElementById("loader");

loader.style.display = "none";
const submitHandler = async (event) => {
	event.preventDefault();
	const username = inputsLogin[0].value;
	const password = inputsLogin[1].value;
	const resultValidate = validation(username, password);
	if (!resultValidate) return;
	const result = await postData("auth/login", { username, password });
	setCookie(result.token);
	console.log(result.token);
	location.assign("index.html");
};

authoration();
buttonLogin.addEventListener("click", submitHandler);
document.addEventListener("DOMContentLoaded", authoration);
