$(document).ready(function(){	
	var date = new Date().getDate();
	var month = new Date().getMonth();
	var year = new Date().getFullYear();
	$("#datepicker").val((month + 1) + "/" + date + "/" + year);
	$("#datepicker").datepicker({
		showAmin: "slide"
	});

	var checkUsername = false;
	var checkPassword = false;
	var checkEmail = false;

	var username = $("#username");
	var password = $("#password");
	var email = $("#email");

	var errorUsername = $("#errorUsername");

	var errorPassword = $("#errorPassword");

	var errorEmail = $("#errorEmail");

	var date = $("#datepicker").val();

	$("#btnSubmit").click(function(){
		console.log("click Submit button");
		if (username.val() == "" || username.val() == null) {
			username.css("background","rgba(245, 117, 117, 0.3)");
			errorUsername.html("Please enter username");
			checkUsername = false;
		} else if (username.val().length < 8) {
			errorUsername.html("Username min length 8 letter");
			username.css("background","rgba(245, 117, 117, 0.3)");
			checkUsername = false;
		} else if (!checkValidate(username.val())) {
			errorUsername.html("Username wrong format");
			username.css("background","rgba(245, 117, 117, 0.3)");
			checkUsername = false;
		} else {
			username.css("background","rgba(177, 255, 153, 0.5)");
			errorUsername.html("");
			checkUsername = true;
		}

		if (password.val() == "" || password.val() == null) {
			errorPassword.html("Please enter password");
			password.css("background","rgba(245, 117, 117, 0.3)");
			checkPassword = false;
		} else if (password.val().length < 8) {
			errorPassword.html("Password min length 8 letter");
			password.css("background","rgba(245, 117, 117, 0.3)");
			checkPassword = false;
		} else if (!checkValidate(password.val())) {
			errorPassword.html("Password wrong format");
			password.css("background","rgba(245, 117, 117, 0.3)");
			checkPassword = false;
		} else {
			errorPassword.html("");
			password.css("background","rgba(177, 255, 153, 0.5)");
			checkPassword = true;
		}


		if (email.val() == "" || email.val() == null) {
			errorEmail.html("Please enter email");
			email.css("background","rgba(245, 117, 117, 0.3)");
			checkEmail = false;
		} else if (!checkValidateEmail(email.val())) {
			errorEmail.html("Email wrong format");
			email.css("background","rgba(245, 117, 117, 0.3)");
			checkEmail = false;
		} else {
			errorEmail.html("");
			email.css("background","rgba(177, 255, 153, 0.5)");
			checkEmail = true;
		}

		if (checkUsername && checkPassword && checkEmail) {
			console.log("call ajax");
			$.ajax({
				method: "GET",
				url: "test.php?username=" + username.val(),
				dateType: "html"
			}).done(function(messenger) {
				if (messenger == "true") {
					$("#results").html("Username is Emplty");
					$("#results").css({
						color: "rgb(249,127,127)",
						fontsize: "20px;"
					});
				} else {
					$("#results").html("Successful!!!");
					$("#results").css({
						color: "rgb(49,171,70)",
						fontsize: "20px;"
					});
				}
			});
		}
	});

function checkValidateEmail(email) {
	var results = /^([0-9a-zA-Z])*@(([a-z])*.([a-z]{3}))*$/;
	return results.test(email);
}

function checkValidate(text) {
	var results = /^([0-9a-zA-Z])+$/;
	return results.test(text);
}

});