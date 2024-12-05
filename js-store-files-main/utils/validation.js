const validatUserName = (username) => {
	const regex = /^[a-zA-Z\d._]{4,10}$/;
	const result = regex.test(username);
	return result;
};
const validatPassword = (password) => {
	const regex = /^.{5,12}$/;
	const result = regex.test(password);
	return result;
};
const validation = (username, password) => {
	const val1 = validatUserName(username);
	const val2 = validatPassword(password);
	if (val1 && val2) {
		return true;
	} else if (!val1) {
		alert("Username is not valid!");
	} else if (!val2) {
		alert("Password is not valid!");
	}
};

export { validatPassword, validatUserName, validation };
