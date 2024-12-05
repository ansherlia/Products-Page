const BASE_URL = "https://fakestoreapi.com";
const postData = async (path, data) => {
	try {
		const response = await fetch(`${BASE_URL}/${path}`, {
			method: "POST",
			body: JSON.stringify(data),
			headers: { "Content-Type": "Application/json" },
		});
		const json = await response.json();
		return json;
	} catch (error) {
		alert("An Error Occourd!");
	}
};
const postData1 = async (path, data) => {
	try {
		const response = await fetch(`${BASE_URL}/${path},`, {
			method: "POST",
			body: JSON.stringify(data),
			headers: { "Content-Type": "Application/json" },
		});
		const json = response.json();
		return json;
	} catch (error) {
		alert("an error accourd!");
	}
};
const getData = async (path) => {
	try {
		const url = `${BASE_URL}/${path}`;
		const response = await fetch(url);
		const json = await response.json();
		return json;
	} catch (error) {
		alert("An Error Accourd!");
	} finally {
	}
};
export { getData, postData };
