var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var numberDayOfMonth = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31");
var day = new Array("Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat");
var dateNow = new Date();
var dateCheck = new Date().getDate();
var monthCheck = new Date().getMonth();
var yearCheck = new Date().getFullYear();
var results = "";
var positionDateNow;

function setDateNowForInput() {
	results = dateCheck + "/" + (monthCheck + 1) + "/" + yearCheck;
	document.getElementById("output").value = results;
}

function init() {
	document.write("<DIV ID='calendar' STYLE='display:none;'>")
	document.write("<FORM>");
	document.write("<TABLE ID='table' STYLE='text-align: center;'>");
	this.drawRowAction();
	this.drawDay();
	this.drawCalendar(dateNow.getMonth(), dateNow.getFullYear());
	document.write("</TABLE>");
	document.write("</FORM>");
	document.write("</DIV>")
}

/*
	create: button previous year, button next year, button previous month, button next month, select month and select year
	*/
	function drawRowAction() {
		document.write("<TR ID='rowAction'>");
		document.write("<TD CLASS='btn' onClick='btnPreviousYearClick();'><a TYPE='a' NAME='btnPreviousYear'>&#8647;</a></TD>");
		document.write("<TD CLASS='btn' onClick='btnPreviousMonthClick();'><a TYPE='a' NAME='btnPreviousMonth'>&larr;</a></TD>");
		document.write("<TD CLASS='btn' colspan='2'><SELECT ID='months' onChange='changeMonth();'>");
		for(var i = 0; i < months.length; i++) {
			document.write("<OPTION VALUE='" + i + "'>" + months[i] + "</OPTION>")
		};
		document.write("</SELECT></TD>")
		document.write("<TD CLASS='btn' colspan='1'><SELECT ID='years' onChange='changeYear();'>");
		for(var i = 1900; i <= 2025; i++) {
			document.write("<OPTION VALUE='" + i + "'>" + i + "</OPTION>")
		};
		document.write("</SELECT></TD>")
		document.write("<TD CLASS='btn' onClick='btnNextMonthClick();'><a TYPE='a' NAME='btnNextMonth'>&rarr;</a></TD>");
		document.write("<TD CLASS='btn' onClick='btnNextYearClick();'><a TYPE='a' NAME='btnNextYear' >&#8649;</a></TD>");
		document.write("</TR>");
	}

/*
	create calendar
	*/
	function drawCalendar(month, year) {
		var count = 1;
		for(var i = 0; i < 6; i++) {
			document.write("<TR onclick='cancelCalendar();'>");
			for(var j = 0; j < 7; j++) {
				document.write("<TD ID='item" + count + "' CLASS='item' onClick='checkDay(" + count + ");'></TD>");		
				count++;		
			};
			document.write("</TR>");
		};
		setData();
		setMonths();
		setYears();
	}

/*
	erase all value in calendar 
	*/
	function erase() {
		for(var i = 1; i <= 42; i++) {
			document.getElementById("item" + i).innerHTML = "";
			document.getElementById("item" + i).style.background = "none";
		}
	}

/*
	set date for calendar
	*/
	function setData() {
		var dateNow = new Date().getDate();
		var month_now = new Date().getMonth();
		var yearNow = new Date().getFullYear();
		var day = new Date(yearCheck, monthCheck, 1).getDay();

		var previous_month = monthCheck - 1;
		var next_month = monthCheck + 1;

		if(((yearCheck % 4 == 0) && (yearCheck % 100 != 0)) || (yearCheck % 400 == 0)) {
			numberDayOfMonth[1] = 29; 
		}else {
			numberDayOfMonth[1] = 28;
		}

		if(previous_month < 0){
			previous_month = 11;
		}

		if(next_month == 12){
			next_month = 0;
		}
		var numberDay = numberDayOfMonth[monthCheck];
		var numberDayOfPreviousMonth = numberDayOfMonth[previous_month];
		var numberDayOfNextMonth = numberDayOfMonth[next_month];

		console.log(numberDayOfPreviousMonth);
		console.log(numberDayOfNextMonth);

		var position = 1;
		var count = 1;
		var check = false;
		var positionStart = day;
		var positionStop = (parseInt(numberDay) + parseInt(day));

		for(var i = 0; i < 6; i++) {
			for(var j = 0; j < 7; j++) {
				if(count >= day) {
					check = true;
				}
				if(check == true && position <= numberDay) {
					console.log("date: "+ (position + day));
					document.getElementById("item" + (position + day)).innerHTML = position;
					document.getElementById("item" + (position + day)).style.background = "#FBFCFC";
					if(dateNow == position && month_now == monthCheck && yearNow == yearCheck) {
						document.getElementById("item" + (position + day)).style.background = "#00ace6";
						positionDateNow = "item" + (position + day);
					}
					document.getElementById("item" + (position + day)).style.color = "#000";
					position++;
				}
				count++;
			}
		}
		for(var i = positionStart; i > 0; i--) {
			console.log("i: "+i);
			document.getElementById("item" + (i)).innerHTML = numberDayOfPreviousMonth--;
			document.getElementById("item" + (i)).style.color = "#ffffff";
		}
		for(var j = 1; j <= (42 - positionStop); j++) {
			console.log("j: "+ (j + positionStop));
			document.getElementById("item" + (j + positionStop)).innerHTML = j;
			document.getElementById("item" + (j + positionStop)).style.color = "#ffffff";
		}
	}

	function checkDay(day) {
		var day = document.getElementById("item" + day).innerHTML;
		if(day != null && day != "") {
			var results = day + "/" + (parseInt(document.getElementById("months").value) + 1) + "/" + yearCheck;
			document.getElementById("output").value = results;
		}
	}

	function changeMonth() {
		erase();
		monthCheck = document.getElementById("months").value;
		console.log(monthCheck);
		setData();
	}

	function setMonths() {
		document.getElementById("months").value = monthCheck;
	}

	function setYears() {
		document.getElementById("years").value = yearCheck;
	}

	function changeYear() {
		erase();
		yearCheck = document.getElementById("years").value;
		console.log(monthCheck);
		setData();
	}

/*
	create event for button previous month
	*/
	function btnPreviousMonthClick() {
		erase();
		monthCheck = monthCheck - 1;
		if(monthCheck < 0) {
			monthCheck = 11;
			yearCheck = yearCheck - 1;
		}
		console.log(monthCheck);
		setData();
		setMonths();
		setYears();
	}

/*
	create event for button next month
	*/
	function btnNextMonthClick() {
		erase();
		monthCheck = monthCheck + 1;
		if(monthCheck > 11) {
			monthCheck = 0;
			yearCheck = yearCheck + 1;
		}
		console.log(monthCheck);
		setData();
		setMonths();
		setYears();
	}

/*
	create event for button previous year
	*/
	function btnPreviousYearClick() {
		erase();
		yearCheck = yearCheck - 1;
		console.log(monthCheck);
		setData();
		setMonths();
		setYears();
	}

/*
	create event for button next year
	*/
	function btnNextYearClick() {
		erase();
		yearCheck = yearCheck + 1;
		console.log(monthCheck);
		setData();
		setMonths();
		setYears();
	}

	function drawDay() {
		document.write("<TR ID='title'>");
		for(var i = 0; i < day.length; i++) {
			document.write("<TD>" + day[i] + "</TD>");
		};
		document.write("</TR>");
	}

	function setItem(item, value) {
		var item = document.getElementById(item);
		item.innerHTML = value;
	}

	function cancelCalendar() {
		document.getElementById("calendar").style.display = "none";
	}

	function openCalendar() {
		document.getElementById("calendar").style.display = "block";
	}