import { getCookie } from "./cookie.js";
const authoration = () => {
	const cookie = getCookie();
	const url = location.href;
	if (
		(cookie && url.includes("auth")) ||
		(!cookie && url.includes("dashboard"))
	) {
		location.assign("./index.html");
	}
};

// const authoration = () => {
// 	const cookie = getCookie();
// 	const url = location.href;
// 	if (
// 		(cookie && url.includes("auth")) ||
// 		(!cookie && url.includes("dashboard"))
// 	) {
// 		location.assign("index.html");
// 	}
// };
export default authoration;
// document.addEventListener("DOMContentLoaded", authoration);
