jQuery.validator.setDefaults({
	debug: true,
	success: "valid"
});
$("#myForm").validate({
	rules: {
		username: {
			required: true,
			minlength: 8
		},
		errorPlacement: "#errorUsername",
		messager: {
			required: "Please enter Username",
			minlength: "Username min length 8 characters"
		}
	}
	errorPlacement: function(error, element){
		$("element").html(error);
	}
});
$(document).ready(function(){	
	var date = new Date().getDate();
	var month = new Date().getMonth();
	var year = new Date().getFullYear();
	$("#datepicker").val((month + 1) + "/" + date + "/" + year);
	$("#datepicker").datepicker({
		showAmin: "slide"
	});
});