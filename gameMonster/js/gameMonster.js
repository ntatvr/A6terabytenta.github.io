var container = document.getElementById("container");
var footer = document.getElementById("footer");
var context = container.getContext("2d");
var contextAction = footer.getContext("2d");
document.body.appendChild(container);
var score = 10; // score
var tempScore = 10;
var bgready = false; // background container
var run = true;
var numberMonster = 1; // number monstar random
var bgImage = new Image();
var bestScore = 10;
var heart = 5;
var speed = 1; // speed
var countClick = 0;
var booleanPause = false;
var booleanStop = false;
var booleanBoom = true;
var numberBoom = 3;
var numberStop = 3;
var listBlood = new Array();

var monsterImage = new Image();
monsterImage.onload = function() {
}
monsterImage.src = "images/monster.gif";

bgImage.onload = function() {
	bgready = true;
}
bgImage.src = "images/background.jpg";


if (typeof(Storage) !== "underfined") {
	localStorage.setItem("bestScore", bestScore);
}

// create stop image
var stopImage = new Image();
stopImage.onload = function() {
}
stopImage.src = "images/stop.png";

// create boom image
var boomImage = new Image();
boomImage.onload = function() {
}
boomImage.src = "images/boom.gif";

//create pause image
var pauseImage = new Image();
pauseImage.onload = function() {
}
pauseImage.src = "images/pause.png";


//create restart image
var restartImage = new Image();
restartImage.onload = function() {
}
restartImage.src = "images/restart.png";


//create heart image
var heartitem = new Image();
heartitem.onload = function() {
}
heartitem.src = "images/heart.png";


//create blood image
var bloodImage = new Image();
bloodImage.onload = function() {
}
bloodImage.src = "images/blood.png";

// create Object Monster
var MonsterOne = {
	beginX: 0,
	beginY: 0,
	endX: 120,
	endY: 120,
	startX: 0,
	startY: 0,
	stopX: 120,
	stopY: 120,
	speed: speed,
	click: false,
	show: true,
	dieX: 0,
	dieY:0
}

var MonsterTwo = {
	beginX: 190,
	beginY: 0,
	endX: 190,
	endY: 120,
	startX: 190,
	startY: 0,
	stopX: 190,
	stopY: 120,
	speed: speed,
	click: false,
	show: false,
	dieX: 0,
	dieY:0
}

var MonsterThree = {
	beginX: 380,
	beginY: 0,
	endX: 260,
	endY: 120,
	startX: 380,
	startY: 0,
	stopX: 260,
	stopY: 120,
	speed: speed,
	click: false,
	show: false,
	dieX: 0,
	dieY:0,
	stop: false
}

var MonsterFour = {
	beginX: 380,
	beginY: 190,
	endX: 260,
	endY: 190,
	startX: 380,
	startY: 190,
	stopX: 260,
	stopY: 190,
	speed: speed,
	click: false,
	show: false,
	dieX: 0,
	dieY:0
}

var MonsterFive = {
	beginX: 380,
	beginY: 380,
	endX: 260,
	endY: 260,
	startX: 380,
	startY: 380,
	stopX: 260,
	stopY: 260,
	speed: speed,
	click: false,
	show: false,
	dieX: 0,
	dieY:0
}

var MonsterSix = {
	beginX: 190,
	beginY: 380,
	endX: 190,
	endY: 260,
	startX: 190,
	startY: 380,
	stopX: 190,
	stopY: 260,
	speed: speed,
	click: false,
	show: false,
	dieX: 0,
	dieY:0
}

var MonsterSeven = {
	beginX: 0,
	beginY: 380,
	endX: 120,
	endY: 260,
	startX: 0,
	startY: 380,
	stopX: 120,
	stopY: 260,
	speed: speed,
	click: false,
	show: false,
	dieX: 0,
	dieY:0
}

var MonsterEight = {
	beginX: 0,
	beginY: 190,
	endX: 120,
	endY: 190,
	startX: 0,
	startY: 190,
	stopX: 120,
	stopY: 190,
	speed: speed,
	click: false,
	show: false,
	dieX: 0,
	dieY:0
}

var MonsterNine = {
	startX: Math.floor((Math.random() * 500) + 1),
	startY: Math.floor((Math.random() * 500) + 1),
	stopX: Math.floor((Math.random() * 500) + 1),
	stopY: Math.floor((Math.random() * 500) + 1),
	speed: 1,
	click: false,
	show: true,
	dieX: 0,
	dieY:0
}

// Create Event Click For Buttons
footer.addEventListener("click", function(e) {
	var locationX = e.pageX - this.offsetLeft;
	var locationY = e.pageY - this.offsetTop;

	// Button Pause
	if (locationX > 400 && locationX < 440 && locationY > 60 && locationY < 100) {
		console.log("PAUSE");
		booleanStop = false;
		if (run) {
			run = false;
			booleanPause = true;
		} else {
			run = true;
			main();
			booleanPause = false;
		}
	}

	// Button Restart
	if (locationX > 450 && locationX < 490 && locationY > 60 && locationY < 100) {
		console.log("RESTART");
		context.clearRect(0, 0, container.width, container.height);
		restart();
		main();

	}

	// Button Boom
	if (locationX > 290 && locationX < 340 && locationY > 60 && locationY < 100) {
		if (booleanBoom) {
			console.log("BOOM");
			executeActionBoom();
			numberBoom--;
			if (numberBoom == 0) {
				booleanBoom = false;
			}
		}

	}

	// Button Stop
	if (locationX > 350 && locationX < 390 && locationY > 60 && locationY < 100) {
		console.log("STOP");
		booleanPause = false;
		if (numberStop > 0) {
			if (run) {
				run = false;
				booleanStop = true;
				numberStop--;
			} else {
				run = true;
				main();
				booleanStop = false;
			}
			setTimeout(function() {
				run = true;
				main();
				booleanStop = false;
			}, 2000)
		} else {
			run = true;
			main();
			booleanStop = false;
		}
	}
})


// Create Event Click For Monster
container.addEventListener("click", function (e) {
	locationX = e.pageX - this.offsetLeft;
	locationY = e.pageY - this.offsetTop;

	if (!booleanPause) {
		score -= 5;
		tempScore -= 5;
		heart--;
		if (MonsterOne.show) {
			executeAction(MonsterOne, locationX, locationY);
		}

		if (MonsterTwo.show) {
			executeAction(MonsterTwo, locationX, locationY);
		}

		if (MonsterThree.show) {
			executeAction(MonsterThree, locationX, locationY);
		}

		if (MonsterFour.show) {
			executeAction(MonsterFour, locationX, locationY);
		}

		if (MonsterFive.show) {
			executeAction(MonsterFive, locationX, locationY);
		}

		if (MonsterSix.show) {
			executeAction(MonsterSix, locationX, locationY);
		}

		if (MonsterSeven.show) {
			executeAction(MonsterSeven, locationX, locationY);
		}

		if (MonsterEight.show) {
			executeAction(MonsterEight, locationX, locationY);
		}

		if (MonsterNine.show && MonsterNine.startX < locationX && locationX < (MonsterNine.startX + monsterImage.width) && MonsterNine.startY < locationY && locationY < (MonsterNine.startY + monsterImage.height)) {
			var soundClick = new Audio('music/audio.mp3');
			soundClick.play();
			heart++;
			score += 15;
			tempScore += 15;
			countClick++;
			MonsterNine.click = true;
			MonsterNine.show = false;
			MonsterNine.dieX = MonsterNine.startX;
			MonsterNine.dieY = MonsterNine.startY;
			MonsterNine.startX = Math.floor((Math.random() * 500) + 1);
			MonsterNine.startY = Math.floor((Math.random() * 500) + 1);
			MonsterNine.stopX = Math.floor((Math.random() * 500) + 1);
			MonsterNine.stopY = Math.floor((Math.random() * 500) + 1);
			addElementBlood(MonsterNine.dieX, MonsterNine.dieY);
		}
	} 

	if (booleanStop) {
		if (MonsterOne.show) {
			executeActionStop(MonsterOne, locationX, locationY);
		}

		if (MonsterTwo.show) {
			executeActionStop(MonsterTwo, locationX, locationY);
		}

		if (MonsterThree.show) {
			executeActionStop(MonsterThree, locationX, locationY);
		}

		if (MonsterFour.show) {
			executeActionStop(MonsterFour, locationX, locationY);
		}

		if (MonsterFive.show) {
			executeActionStop(MonsterFive, locationX, locationY);
		}

		if (MonsterSix.show) {
			executeActionStop(MonsterSix, locationX, locationY);
		}

		if (MonsterSeven.show) {
			executeActionStop(MonsterSeven, locationX, locationY);
		}

		if (MonsterEight.show) {
			executeActionStop(MonsterEight, locationX, locationY);
		}

		if (MonsterNine.show) {
			executeActionStop(MonsterNine, locationX, locationY);
		}
	}
}, false);


// Execute Method Action For Button Stop
var executeActionStop = function(monster, locationX, locationY) {
	if (monster.click) {
		if (monster.startX < locationX && locationX < (monster.startX + monsterImage.width) && monster.startY < locationY && locationY < (monster.startY + monsterImage.height)) {
			var soundClick = new Audio('music/audio.mp3');
			soundClick.play();
			score += 10;
			tempScore += 10;
			monster.click = false;
			monster.show = false;
			monster.dieX = monster.startX;
			monster.dieY = monster.startY;
			monster.startX = monster.beginX;
			monster.startY = monster.beginY;
			monster.stopX = monster.endX;
			monster.stopY = monster.endY;
			addElementBlood(monster.dieX, monster.dieY);
			render();
			random();
		}
	}
}

// Execute Action
function executeAction(monster, locationX, locationY) {
	if (monster.click) {
		if (monster.startX < locationX && locationX < (monster.startX + monsterImage.width) && monster.startY < locationY && locationY < (monster.startY + monsterImage.height)) {
			var soundClick = new Audio('music/audio.mp3');
			soundClick.play();
			heart++;
			countClick++;
			if (countClick == 30) {
				heart++;
				countClick = 0;
			}
			if (countClick % 5 == 0) {
				MonsterNine.show =  true;
				console.log("show MonsterNine");
			}
			score += 15;
			tempScore += 15;
			monster.click = false;
			monster.show = false;
			monster.dieX = monster.startX;
			monster.dieY = monster.startY;
			monster.startX = monster.beginX;
			monster.startY = monster.beginY;
			monster.stopX = monster.endX;
			monster.stopY = monster.endY;
			for (var i = 0; i < numberMonster; i++) {
				random();
			}
			addElementBlood(monster.dieX, monster.dieY);
			render();
		}
	}
}

// Create element blood
var addElementBlood = function(initX, initY) {
	var Blood = {
		initX: initX,
		initY: initY
	}
	listBlood[listBlood.length] = Blood;
}

// method random monster
var random = function() {
	if (!MonsterOne.show) {
		refreshMonster(MonsterOne);
		
	}
	if (!MonsterTwo.show) {
		refreshMonster(MonsterTwo);
	}
	if (!MonsterThree.show) {
		refreshMonster(MonsterThree);
	}
	if (!MonsterFour.show) {
		refreshMonster(MonsterFour);
	}
	if (!MonsterFive.show) {
		refreshMonster(MonsterFive);
	}
	if (!MonsterSix.show) {
		refreshMonster(MonsterSix);
	}
	if (!MonsterSeven.show) {
		refreshMonster(MonsterSeven);
	}
	if (!MonsterEight.show) {
		refreshMonster(MonsterEight);
	}
	var value = Math.floor((Math.random() * 8) + 1);
	switch(value) {
		case 1:
		if (!MonsterOne.show) {
			MonsterOne.show = true;
		}
		break;
		case 2:
		if (!MonsterTwo.show) {
			MonsterTwo.show = true;
		}
		break;
		case 3:
		if (!MonsterThree.show) {
			MonsterThree.show = true;
		}
		break;
		case 4:
		if (!MonsterFour.show) {
			MonsterFour.show = true;
		}
		break;
		case 5:
		if (!MonsterFive.show) {
			MonsterFive.show = true;
		}
		break;
		case 6:
		if (!MonsterSix.show) {
			MonsterSix.show = true;
		}
		break;
		case 7:
		if (!MonsterSeven.show) {
			MonsterSeven.show = true;
		}
		break;
		case 8:
		if (!MonsterEight.show) {
			MonsterEight.show = true;
		}
		break;
	}
}

// Create Lever
var executeLever = function() {
	var temp = tempScore / 100;
	console.log(parseInt(temp));
	switch (parseInt(temp)) {
		case 1:
		speed = 1;
		numberMonster = 1;
		break;
		case 2:
		speed = 2;
		numberMonster = 2;
		break;
		case 3:
		speed = 3;
		numberMonster = 3;
		break;
		case 4:
		speed = 4;
		numberMonster = 4;
		break;
		case 5:
		speed = 5;
		numberMonster = 5;
		break;
		case 6:
		speed = 6;
		numberMonster = 6;
		break;
	}
}

var executeActionBoom = function(monster) {
	if (MonsterOne.show) {
		score += 10;
		MonsterOne.show = false;
		MonsterOne.click = false;
		addElementBlood(MonsterOne.startX, MonsterOne.startY);
	}

	if (MonsterTwo.show) {
		score += 10;
		MonsterTwo.show = false;
		MonsterTwo.click = false;
		addElementBlood(MonsterTwo.startX, MonsterTwo.startY);
	}

	if (MonsterThree.show) {
		score += 10;
		MonsterThree.show = false;
		MonsterThree.click = false;
		addElementBlood(MonsterThree.startX, MonsterThree.startY);
	}

	if (MonsterFour.show) {
		score += 10;
		MonsterFour.show = false;
		MonsterFour.click = false;
		addElementBlood(MonsterFour.startX, MonsterFour.startY);
	}

	if (MonsterFive.show) {
		score += 10;
		MonsterFive.show = false;
		MonsterFive.click = false;
		addElementBlood(MonsterFive.startX, MonsterFive.startY);
	}

	if (MonsterSix.show) {
		score += 10;
		MonsterSix.show = false;
		MonsterSix.click = false;
		addElementBlood(MonsterSix.startX, MonsterSix.startY);
	}

	if (MonsterSeven.show) {
		score += 10;
		MonsterSeven.show = false;
		MonsterSeven.click = false;
		addElementBlood(MonsterSeven.startX, MonsterSeven.startY);
	}

	if (MonsterEight.show) {
		score += 10;
		MonsterEight.show = false;
		MonsterEight.click = false;
		addElementBlood(MonsterEight.startX, MonsterEight.startY);
	}

	if (MonsterNine.show) {
		score += 10;
		MonsterNine.show = false;
		MonsterNine.click = false;
		addElementBlood(MonsterNine.startX, MonsterNine.startY);
	}

	speed = speed;
	var soundBoom = new Audio('music/boom.mp3');
	soundBoom.play();
	render();
	for (var i = 0; i < numberMonster; i++) {
		random();
	}
}

// method refresh monster
function refreshMonster(monster) {
	monster.show = false;
	monster.startX = monster.beginX;
	monster.startY = monster.beginY;
	monster.stopX = monster.endX;
	monster.stopY = monster.endY;
	monster.speed = speed;
}

// method restart game
var restart = function() {
	speed = 1;
	run = true;
	score = 10;
	bgready = true;
	numberMonster = 1;
	score = 10;
	tempScore = 10;
	heart = 5;
	numberBoom = 3;
	numberStop = 3;
	booleanPause = false;
	booleanStop = false;
	booleanBoom = true;
	listBlood = new Array();
	refreshMonster(MonsterOne);
	refreshMonster(MonsterTwo);
	refreshMonster(MonsterThree);
	refreshMonster(MonsterFour);
	refreshMonster(MonsterFive);
	refreshMonster(MonsterSix);
	refreshMonster(MonsterSeven);
	refreshMonster(MonsterEight);
	MonsterOne.show = true;
}

// method update monster
var updateMonster = function(monster) {
	monster.click = true;

	if (monster.startX > monster.stopX) {
		monster.startX -= monster.speed;
	} else if (monster.startX < monster.stopX) {
		monster.startX += monster.speed;
	}

	if (monster.startY > monster.stopY) {
		monster.startY -= monster.speed;
	} else if (monster.startY < monster.stopY) {
		monster.startY += monster.speed;
	}

	if (monster.startX == monster.stopX && monster.startY == monster.stopY) {
		monster.startX = monster.stopX;
		monster.startY = monster.stopY;
		monster.stopX = monster.beginX;
		monster.stopY = monster.beginY;
	}

	if (monster.startX == monster.beginX && monster.startY == monster.beginY) {
		monster.show = false;
		monster.stop = true;
		monster.startX = monster.beginX;
		monster.startY = monster.beginY;
		monster.stopX = monster.endX;
		monster.stopY = monster.endY;
		score -= 10;
		heart--;
		random();
	}
}

// method update monster in center canvas
var updateMonsterCenter = function(monster) {
	if (monster.startX > monster.stopX) {
		monster.startX -= monster.speed;
	} else if (monster.startX < monster.stopX) {
		monster.startX += monster.speed;
	}

	if (monster.startY > monster.stopY) {
		monster.startY -= monster.speed;
	} else if (monster.startY < monster.stopY) {
		monster.startY += monster.speed;
	}

	if (monster.startX == monster.stopX && monster.startY == monster.stopY) {
		monster.startX = monster.stopX;
		monster.startY = monster.stopY;
		monster.stopX = Math.floor((Math.random() * 500) + 1);
		monster.stopY = Math.floor((Math.random() * 500) + 1);
	}
}

var updateBlood = function() {
	if (listBlood.length > 0) {
		for (var position = 0; position < listBlood.length; position++) {
			context.drawImage(bloodImage, listBlood[position].initX, listBlood[position].initY);
		}
	}
	
}

// method draw all element in canvas
var render = function() {
	if (bgready) {
		context.drawImage(bgImage, 0, 0, container.width, container.height);
	}

	updateBlood();

	if (MonsterOne.show) {
		context.drawImage(monsterImage, MonsterOne.startX, MonsterOne.startY);
	}

	if (MonsterTwo.show) {
		context.drawImage(monsterImage, MonsterTwo.startX, MonsterTwo.startY);
	}

	if (MonsterThree.show) {
		context.drawImage(monsterImage, MonsterThree.startX, MonsterThree.startY);
	}

	if (MonsterFour.show) {
		context.drawImage(monsterImage, MonsterFour.startX, MonsterFour.startY);
	}

	if (MonsterFive.show) {
		context.drawImage(monsterImage, MonsterFive.startX, MonsterFive.startY);
	}

	if (MonsterSix.show) {
		context.drawImage(monsterImage, MonsterSix.startX, MonsterSix.startY);
	}

	if (MonsterSeven.show) {
		context.drawImage(monsterImage, MonsterSeven.startX, MonsterSeven.startY);
	}

	if (MonsterEight.show) {
		context.drawImage(monsterImage, MonsterEight.startX, MonsterEight.startY);
	}

	if (MonsterNine.show) {
		updateMonsterCenter(MonsterNine);
		context.drawImage(monsterImage, MonsterNine.startX, MonsterNine.startY);
	}

	contextAction.clearRect(0, 0, footer.width, footer.height);
	contextAction.fillStyle = "rgb(29, 214, 4)";
	contextAction.font = "20px Arial";
	contextAction.fillText("Score: " + score, 10, 30);
	contextAction.fillText("Random Monster: " + numberMonster, 300, 30);
	contextAction.fillText("Heart: ", 10, 60);
	contextAction.fillText("Speed: " + speed, 10, 90);
	var temp = 0;
	for (var i = 0; i < heart; i++) {
		contextAction.drawImage(heartitem, (70 + temp), 45, 20, 20);
		temp += 20;
	}
	contextAction.drawImage(boomImage, 290, 60, 50, 40);
	contextAction.drawImage(stopImage, 350, 60, 40, 40);
	contextAction.drawImage(pauseImage, 400, 60, 40, 40);
	contextAction.drawImage(restartImage, 450, 60, 40, 40);
	contextAction.fillStyle = "#FFFFFF";
	contextAction.font = "35px Arial";
	contextAction.fillText(numberBoom, 300, 75);
	contextAction.fillText(numberStop, 360, 75);
	contextAction.fillStyle = "rgb(230, 221, 240)";
	contextAction.font = "20px Arial";
	if (booleanPause) {
		context.fillStyle = "#FFFFFF";
		context.font = "50px Arial";
		context.fillText("Pause!!!", 180, 240);
	}

	if (booleanStop) {
		context.fillStyle = "#FFFFFF";
		context.font = "50px Arial";
		context.fillText("STOP!!!", 180, 240);
	}
}

// method run
var main = function() {
	executeLever();
	if (MonsterOne.show) {
		updateMonster(MonsterOne);
	}
	if (MonsterTwo.show) {
		updateMonster(MonsterTwo);
	}
	if (MonsterThree.show) {
		updateMonster(MonsterThree);
	}
	if (MonsterFour.show) {
		updateMonster(MonsterFour);
	}
	if (MonsterFive.show) {
		updateMonster(MonsterFive);
	}
	if (MonsterSix.show) {
		updateMonster(MonsterSix);
	}
	if (MonsterSeven.show) {
		updateMonster(MonsterSeven);
	}
	if (MonsterEight.show) {
		updateMonster(MonsterEight);
	}
	render();
	if (score <= 0) {
		context.fillStyle = "#FFFFFF";
		context.font = "40px Arial";
		context.fillText("Game Over!!!", 130, 200);
		context.font = "20px Arial";
		context.fillStyle = "#5bfa3f";
		context.fillText("Score = " + score, 130, 240);
		context.fillText("Best score = " + localStorage.getItem("bestScore"), 130, 280);
	} else if (heart == 0) {
		var temp = parseInt(localStorage.getItem("bestScore"));
		if (temp < score) {
			localStorage.setItem("bestScore", score);
		}
		context.fillStyle = "#FFFFFF";
		context.font = "40px Arial";
		context.fillText("Game Over!!!", 130, 200);
		context.font = "20px Arial";
		context.fillStyle = "#5bfa3f";
		context.fillText("Score = " + score, 130, 240);
		context.fillText("Best score = " + localStorage.getItem("bestScore"), 130, 280);
	} else {
		if (run) {
			requestAnimationFrame(main);
		}
		
	}
}

var windows = window;
requestAnimationFrame = windows.requestAnimationFrame || windows.webkitRequestAnimationFrame 
|| windows.msRequestAnimationFrame || windows.mozRequestAnimationFrame;

main();
