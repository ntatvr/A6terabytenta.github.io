
var images = new Array("image_0.jpg", "image_1.jpg", "image_2.jpg", "image_3.jpg");
var position = 0;
var currentPosition = 0;
var currentImage = images[currentPosition];
var newImage;

createSlider();

var interval_obj = setInterval(function() {
	action(position++);
	if(position == images.length) {
		position = 0;
	}
}, 3000);

function createSlider() {
	document.write("<DIV ID='wapSlider'>");
	drawImages(currentImage);
	drawbtnPrevious("previous.png");
	drawbtnNext("next.png");
	drawCricle();
	document.write("</DIV>");
}

function drawImages(url) {
	document.write("<DIV ID='wrapImage'>");
	document.write("<img ID='image' src='images/" + url + "' alt='images/" + url + "'/>");
	document.write("</DIV>");
}

function drawbtnPrevious(url) {
	document.write("<DIV ID='btnPrevious' onClick='btnPreviousClick();'>");
	document.write("<img src= 'images/" + url + "' alt= 'images/" + url + "'/>");
	document.write("</DIV>");
}

function drawbtnNext(url) {
	document.write("<DIV ID='btnNext' onClick='btnNextClick();'>");
	document.write("<img src= 'images/" + url + "' alt= 'images/" + url + "'/>");
	document.write("</DIV>");
}

function drawCricle() {
	document.write("<DIV ID= 'wapCricle'>");
	for(var i = 0; i < images.length; i++) {
		document.write("<DIV CLASS='item' ID='item" + i + "'onClick='action(" + i + ");'></DIV>");
		document.getElementById("item" + i).style.background = "#FFFFFF";	
	};
	document.write("</DIV>")
}

function action(position) {
	document.getElementById("item" + currentPosition).style.background = "#FFFFFF";
	document.getElementById("item" + position).style.background = "#408000";
	currentPosition = position;
	currentImage = images[position];
	setImage("images/" + currentImage);
	currentPosition = position;
}

function btnPreviousClick(currentImage) {
	if((position - 1) < 0) {
		position = images.length - 1;
	} else {
		position = currentPosition - 1;
	}
	action(position);
}

function btnNextClick(currentImage) {
	if((position + 1) > (images.length - 1)) {
		position = 0;
	} else {
		position = currentPosition + 1;
	}
	action(position);
}

function setImage(url) {
	document.getElementById("image").src = url;
}