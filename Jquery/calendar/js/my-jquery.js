$(document).ready(function(){
	var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	var numberDayOfMonth = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31");
	var day = new Array("Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat");
	var dateNow = new Date();
	var dateCheck = new Date().getDate();
	var monthCheck = new Date().getMonth();
	var yearCheck = new Date().getFullYear();
	var results = "";
	var calendar = $("#calendar");

	init();

	function init(){
		calendar.append("<DIV STYLE='display:none;'>")
		calendar.append("<FORM>");
		calendar.append("<TABLE ID='table'>");
		drawDay();
		calendar.append("</TABLE>");
		calendar.append("</FORM>");
		calendar.append("</DIV>")
	}

	function drawDay() {
		calendar.append("<TR ID='title'>");
		for(var i = 0; i < day.length; i++) {
			calendar.append("<TD>" + day[i] + "</TD>");
		};
		calendar.append("</TR>");
	};

	
});