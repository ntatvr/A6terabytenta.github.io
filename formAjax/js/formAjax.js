var listUsername = new Array("A6terabytente", "tuanem123");
var checkUsername = false;
var checkPassword = false;
var checkEmail = false;

/*
	create event for button Submit
	*/
	function btnSubmitClick() {
		var listUsername = new Array("A6terabytente", "tuanem123");
		var checkUsername = false;
		var checkPassword = false;
		var checkEmail = false;
		var username = document.getElementById("username");
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		var birthday = document.getElementById("output");
		var errorUsername = document.getElementById("errorUsername");
		var errorEmail = document.getElementById("errorEmail");
		var errorPassword = document.getElementById("errorPassword");
		errorUsername.innerHTML = "";
		errorPassword.innerHTML = "";
		errorEmail.innerHTML = "";
		if (isNull(username.value) && isNull(password.value) && isNull(email.value)) {
			username.style.background = "#FDEDEC";
			password.style.background = "#FDEDEC";
			email.style.background = "#FDEDEC";
		} else {
			setDefaultBackground(username, password, email, birthday);
			if (isNull(username.value)) {
				username.style.background = "#FDEDEC";
			} else if (!checkLength(username.value)) {
				errorUsername.innerHTML = "Username length min 8 letter";
			} else if (!checkValidate(username.value)) {
				errorUsername.innerHTML = "Username wrong format";
			} else {
				checkUsername = true;
			}	

			if (isNull(password.value)) {
				password.style.background = "#FDEDEC";
			} else if (!checkLength(password.value)) {
				errorPassword.innerHTML = "Password length min 8 letter";
			} else if (!checkValidate(password.value)) {
				errorPassword.innerHTML = "Password wrong format";
			} else {
				checkPassword = true;
			}

			if (isNull(email.value)) {
				email.style.background = "#FDEDEC";
			} else if (!checkValidateEmail(email.value)) {
				errorEmail.innerHTML = "Email wrong format";
			} else {
				checkEmail = true;
			}
		}

		if (checkUsername && checkPassword && checkEmail) {
			callAjax("http://192.168.1.131:8080/NguyenTuanAnh/Exercises/JavaScript/formAjax/test.php", username.value);
		}
	}

	function setDefaultBackground(username, password, email, birthday) {
		username.style.background = "none";
		password.style.background = "none";
		email.style.background = "none";
		birthday.style.background = "none";
	}

	function callAjax(url, username) {
		httpRequest = new XMLHttpRequest();
		if (!httpRequest) {
			alert("Khong the khoi tao XMLHttpRequest");
			return false;
		}
		httpRequest.onreadystatechange = alertContents;
		console.log(url + "?username=" + username);
		httpRequest.open("GET", url + "?username=" + username);
		httpRequest.send();
	}

	function alertContents() {
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
			if (httpRequest.status === 200) {
				console.log(httpRequest.responseText);
				var results = document.getElementById("results");
				if (httpRequest.responseText == "true") {
					results.innerHTML = "Username is empty";
					results.style.color = "##E74C3C";
				} else {
					results.innerHTML = "Request success";
					results.style.color = "#1ABC9C";
				}
			} else {
				alert("Error request");
			}
		}
	}

	function checkUsernameIsEmpty(username) {
		for (var i = 0; i < listUsername.length; i++) {
			if (listUsername[i] == username) {
				return true;
			}
		}
		return false;
	}

	function isNull(text) {
		if (text == null || text == "") {
			return true;
		}
		return false;
	}

	function checkValidateEmail(email) {
		var results = /^([0-9a-zA-Z])*@(([a-z])*.([a-z]{3}))*$/;
		return results.test(email);
	}

	function checkLength(text) {
		if (text.length < 8) {
			return false;
		}
		return true;
	}

	function checkValidate(text) {
		var results = /^([0-9a-zA-Z])+$/;
		return results.test(text);
	}

