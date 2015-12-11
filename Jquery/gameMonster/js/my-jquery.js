$(document).ready(function() {
	var numberMonster = 1; 
	var sumMonsterShow = 0;
	var booleanRandomMonster = false;
	var score = 0;
	var highScore = 0;
	var heart = 3;
	var stop = 3;
	var speed = 1000;
	var divScreen = $("#screen");
	var offset = divScreen.offset();
	var numberBlood = 0;
	var numberBoom = 3;
	var count = 0;
	var running = true;
	var booleanPause = false;
	var booleanGameOver = false;

	if (typeof(Storage) !== "underfined") {
		localStorage.setItem("highScore", highScore);
	}

	/*
		Object Monster 1
		speed: speed movie of monster.
		startX, startY, stopX, stopY: position of monster
		*/
		var monsterOne = {
			id: $("#monsterOne"), 
			startX: "0px", 
			startY: "0px", 
			stopX: "120px", 
			stopY: "120px", 
			speed: speed, 
			show: false
		};

		var monsterTwo = {
			id: $("#monsterTwo"), 
			startX: "190px", 
			startY: "0px", 
			stopX: "190px", 
			stopY: "120px", 
			speed: speed, 
			show: false
		};

		var monsterThree = {
			id: $("#monsterThree"), 
			startX: "380px", 
			startY: "0px", 
			stopX: "260px", 
			stopY: "120px", 
			speed: speed, 
			show: false
		};

		var monsterFour = {
			id: $("#monsterFour"), 
			startX: "380px", 
			startY: "190px", 
			stopX: "260px", 
			stopY: "190px", 
			speed: speed, 
			show: false
		};

		var monsterFive = {
			id: $("#monsterFive"), 
			startX: "380px", 
			startY: "380px", 
			stopX: "260px", 
			stopY: "260px", 
			speed: speed, 
			show: false
		};

		var monsterSix = {
			id: $("#monsterSix"), 
			startX: "190px", 
			startY: "380px", 
			stopX: "190px", 
			stopY: "260px", 
			speed: speed, 
			show: false
		};

		var monsterSeven = {
			id: $("#monsterSeven"), 
			startX: "0px", 
			startY: "380px", 
			stopX: "120px", 
			stopY: "260px", 
			speed: speed, 
			show: false
		};

		var monsterEight = {
			id: $("#monsterEight"), 
			startX: "0px", 
			startY: "190px", 
			stopX: "120px", 
			stopY: "190px", 
			speed: speed, 
			show: false
		};

	// var monsterNine = {
	// 	id: $("#monsterNine"), 
	// 	startX: Math.floor((Math.random() * 500) + 1), 
	// 	startY: Math.floor((Math.random() * 500) + 1), 
	// 	stopX: Math.floor((Math.random() * 500) + 1), 
	// 	stopY: Math.floor((Math.random() * 500) + 1), 
	// 	speed: speed, 
	// 	show: false
	// };
	/*
		Create all monster
		*/	
		var init = function() {
			drawMonster(monsterOne);
			drawMonster(monsterTwo);
			drawMonster(monsterThree);
			drawMonster(monsterFour);
			drawMonster(monsterFive);
			drawMonster(monsterSix);
			drawMonster(monsterSeven);
			drawMonster(monsterEight);
		}

		var drawMonster = function(monster) {
			monster.id.finish();
			monster.id.css({
				"left": monster.startY, 
				"top": monster.startX
			});
			monster.id.hide();
		}

	/*
		function movie monster
		*/
		var animate = function(monster) {
			if(running) {
				showMonster(monster);
				monster.id.animate({ 
					"left" : monster.stopY, 
					"top" : monster.stopX 
				}, speed, function() {
					monster.id.animate({ 
						"left" : monster.startY, 
						"top" : monster.startX 
					}, speed, function finish() {
						sumMonsterShow--;
						hideMonster(monster);
						drawMonster(monster);
						checkMonsterShow();
						setTimeout(function() {
							if(booleanRandomMonster && sumMonsterShow <= numberMonster) {
								for(var i = 0; i< numberMonster; i++) {
									randomMonster();
									sumMonsterShow++;
								}
							}
						}, 1);
					});
				})
			}
		}	

		var checkMonsterShow = function() {
			if(!monsterOne.show && !monsterTwo.show && !monsterThree.show && !monsterFour.show && !monsterFive.show && !monsterSix.show && !monsterSeven.show && !monsterEight.show) {
				booleanRandomMonster = true;
			} else {
				booleanRandomMonster = false;
			}
		}

		var randomMonster = function() {
			var value = Math.floor((Math.random() * 8) + 1);
			console.log(value);
			switch(value) {
				case 1:
				if(monsterOne.show != true) {
					animate(monsterOne);
					break;
				}
				case 2:
				if(monsterTwo.show != true) {
					animate(monsterTwo);
					break;
				}
				case 3:
				if(monsterThree.show != true) {
					animate(monsterThree);
					break;
				}
				case 4:
				if(monsterFour.show != true) {
					animate(monsterFour);
					break;
				}
				case 5:
				if(monsterFive.show != true) {
					animate(monsterFive);
					break;
				}
				case 6:
				if(monsterSix.show != true) {
					animate(monsterSix);
					break;
				}
				case 7:
				if(monsterSeven.show != true) {
					animate(monsterSeven);
					break;
				}
				case 8:
				if(monsterEight.show != true) {
					animate(monsterEight);
					break;
				}
			}
		}


		var clickMonster = function(monster, e) {
			if(!booleanPause && !booleanGameOver) {
				hideMonster(monster);
				drawMonster(monster);
				monster.id.finish();
				setScore();
				var locationX = e.pageX - offset.left;
				var locationY = e.pageY - offset.top;
				setBlood((locationX - 50), (locationY - 50));
				heart++;
				drawAllHeart();
			}
		}

	/*
		action click monster
		*/
		monsterOne.id.click(function(e) {
			clickMonster(monsterOne, e);
		});

		monsterTwo.id.click(function(e) {
			clickMonster(monsterTwo, e);
		});

		monsterThree.id.click(function(e) {
			clickMonster(monsterThree, e);
		});

		monsterFour.id.click(function(e) {
			clickMonster(monsterFour, e);
		});

		monsterFive.id.click(function(e) {
			clickMonster(monsterFive, e);
		});

		monsterSix.id.click(function(e) {
			clickMonster(monsterSix, e);
		});

		monsterSeven.id.click(function(e) {
			clickMonster(monsterSeven, e);
		});

		monsterEight.id.click(function(e) {
			clickMonster(monsterEight, e);
		});

		divScreen.click(function() {
			if(!booleanPause) {
				heart--;
				drawAllHeart();
				if(heart == 0) {
					gameOver();
				}
			}
		});

		$("#btnBoom").click(function() {
			if(!booleanPause && numberBoom > 0) {
				numberBoom--;
				killAllMonster();
				setNumberBoom();
			}
		})

		$("#btnPause").click(function() {
			if(!booleanGameOver) {
				count++;
				if(count % 2 == 1) {
					pauseMonster();
					pause();
					booleanPause = true;
				} else {
					resumeMonster();
					rPause();
					booleanPause = false;
				}
			}
		})

		$("#btnRestart").click(function() {
			restart();
		})

		var showMonster = function(monster) {
			monster.id.show();
			monster.show = true;
		};

		var hideMonster = function(monster) {
			monster.id.hide();
			monster.show = false;
		};

		var drawAllHeart = function() {
			$(".heart").html("");
			var divHeart = $(".heart").html();
			for(var i = 0; i < heart; i++) {
				divHeart += "<img id='heart" + i + "' src='images/heart.png' alt='heart'>";
			}
			$(".heart").html(divHeart);
		}

		var setScore = function() {
			score += 10;
			switch(score) {
				case 100:
				numberMonster = 2;
				speed -= 100;
				break;
				case 200:
				numberMonster = 3;
				speed -= 100;
				break;
				case 300:
				numberMonster = 4;
				speed -= 100;
				break;
				case 400:
				numberMonster = 5;
				speed -= 100;
				break;
			}
			$("span.score").html(score);
		}

		var setHighScore = function() {
			highScore += 10;
			$("span.highScore").html(localStorage.getItem("highScore"));
		}

		var setBlood = function(locationX, locationY) {
			numberBlood++;
			$("<img class='blood' id='blood" + numberBlood + "' src='images/blood.png' alt='blood'>").appendTo(divScreen);
			$("#blood" + numberBlood).css({
				"left": locationX + "px",
				"top": locationY + "px",
				"position": "absolute"
			});
		}

		var setNumberBoom = function() {
			$(".numberBoom").html(numberBoom);
		}

		var removeAllBlood = function() {
			for(var i = numberBlood; numberBlood > 0; numberBlood--) {
				$("#blood" + numberBlood).remove();
			}
		}

		var pauseMonster = function() {
			if(monsterOne.id.is(":visible")) {
				monsterOne.id.pause();
			}

			if(monsterTwo.id.is(":visible")) {
				monsterTwo.id.pause();
			}

			if(monsterThree.id.is(":visible")) {
				monsterThree.id.pause();
			}

			if(monsterFour.id.is(":visible")) {
				monsterFour.id.pause();
			}

			if(monsterFive.id.is(":visible")) {
				monsterFive.id.pause();
			}

			if(monsterSix.id.is(":visible")) {
				monsterSix.id.pause();
			}

			if(monsterSeven.id.is(":visible")) {
				monsterSeven.id.pause();
			}

			if(monsterEight.id.is(":visible")) {
				monsterEight.id.pause();
			}
		}

		var resumeMonster = function() {
			if(monsterOne.id.is(":visible")) {
				monsterOne.id.resume();
			}

			if(monsterTwo.id.is(":visible")) {
				monsterTwo.id.resume();
			}

			if(monsterThree.id.is(":visible")) {
				monsterThree.id.resume();
			}

			if(monsterFour.id.is(":visible")) {
				monsterFour.id.resume();
			}

			if(monsterFive.id.is(":visible")) {
				monsterFive.id.resume();
			}

			if(monsterSix.id.is(":visible")) {
				monsterSix.id.resume();
			}

			if(monsterSeven.id.is(":visible")) {
				monsterSeven.id.resume();
			}

			if(monsterEight.id.is(":visible")) {
				monsterEight.id.resume();
			}
		}

		var hideAllMonster = function() {
			running = false;
			if(monsterOne.id.is(":visible")) {
				monsterOne.id.stop();
			}

			if(monsterTwo.id.is(":visible")) {
				monsterTwo.id.stop();
			}

			if(monsterThree.id.is(":visible")) {
				monsterThree.id.stop();
			}

			if(monsterFour.id.is(":visible")) {
				monsterFour.id.stop();
			}

			if(monsterFive.id.is(":visible")) {
				monsterFive.id.stop();
			}

			if(monsterSix.id.is(":visible")) {
				monsterSix.id.stop();
			}

			if(monsterSeven.id.is(":visible")) {
				monsterSeven.id.stop();
			}

			if(monsterEight.id.is(":visible")) {
				monsterEight.id.stop();
			}
		}

		var disableAllMonster = function() {
			if(monsterOne.id.is(":visible")) {
				monsterOne.id.attr("disabled", "disabled").css("opacity", "0.5");
			}

			if(monsterTwo.id.is(":visible")) {
				monsterTwo.id.attr("disabled", "disabled").css("opacity", "0.5");
			}

			if(monsterThree.id.is(":visible")) {
				monsterThree.id.attr("disabled", "disabled").css("opacity", "0.5");
			}

			if(monsterFour.id.is(":visible")) {
				monsterFour.id.attr("disabled", "disabled").css("opacity", "0.5");
			}

			if(monsterFive.id.is(":visible")) {
				monsterFive.id.attr("disabled", "disabled").css("opacity", "0.5");
			}

			if(monsterSix.id.is(":visible")) {
				monsterSix.id.attr("disabled", "disabled").css("opacity", "0.5");
			}

			if(monsterSeven.id.is(":visible")) {
				monsterSeven.id.attr("disabled", "disabled").css("opacity", "0.5");
			}

			if(monsterEight.id.is(":visible")) {
				monsterEight.id.attr("disabled", "disabled").css("opacity", "0.5");
			}
		}

		var killAllMonster = function() {
			if(monsterOne.id.is(":visible") && monsterOne.show) {
				getLocationDie(monsterOne);
				setTimeout(function() {
					monsterOne.id.finish();
				}, 1);
			}

			if(monsterTwo.id.is(":visible") && monsterTwo.show) {
				getLocationDie(monsterTwo);
				setTimeout(function() {
					monsterTwo.id.finish();
				}, 1);
			}

			if(monsterThree.id.is(":visible") && monsterThree.show) {
				getLocationDie(monsterThree);
				setTimeout(function() {
					monsterThree.id.finish();
				}, 1);
			}

			if(monsterFour.id.is(":visible") && monsterFour.show) {
				getLocationDie(monsterFour);
				setTimeout(function() {
					monsterFour.id.finish();
				}, 1);
			}

			if(monsterFive.id.is(":visible") && monsterFive.show) {
				getLocationDie(monsterFive);
				setTimeout(function() {
					monsterFive.id.finish();
				}, 1);
			}

			if(monsterSix.id.is(":visible") && monsterSix.show) {
				getLocationDie(monsterSix);
				setTimeout(function() {
					monsterSix.id.finish();
				}, 1);
			}

			if(monsterSeven.id.is(":visible") && monsterSeven.show) {
				getLocationDie(monsterSeven);
				setTimeout(function() {
					monsterSeven.id.finish();
				}, 1);
			}

			if(monsterEight.id.is(":visible") && monsterEight.show) {
				getLocationDie(monsterEight);
				setTimeout(function() {
					monsterEight.id.finish();
				}, 1);
			}
		}

		var getLocationDie = function(monster) {
			var tempMonster = monster.id;
			var monsterOffset = tempMonster.offset();
			var positionX = monsterOffset.left - offset.left;
			var positionY = monsterOffset.top - offset.top;
			setBlood(positionX - 25, positionY);
			setScore();
		}

		var restart = function() {
			hideAllMonster();
			removeAllBlood();
			booleanGameOver = false;
			booleanRandomMonster = false;
			booleanPause = false;
			numberMonster = 1;
			sumMonsterShow = 0;
			numberBoom = 3;
			score = 0;
			highScore = 0;
			heart = 3;
			stop = 3;
			speed = 1000;
			running = true;
			$(".gameOver").css({
				"display": "none"
			});
			init();
			monsterOne.id.css("opacity", "1");
			monsterOne.show = false;
			monsterTwo.id.css("opacity", "1");
			monsterTwo.show = false;
			monsterThree.id.css("opacity", "1");
			monsterThree.show = false;
			monsterFour.id.css("opacity", "1");
			monsterFour.show = false;
			monsterFive.id.css("opacity", "1");
			monsterFive.show = false;
			monsterSix.id.css("opacity", "1");
			monsterSix.show = false;
			monsterSeven.id.css("opacity", "1");
			monsterSeven.show = false;
			monsterEight.id.css("opacity", "1");
			monsterEight.show = false;
			main();
			drawAllHeart();
			setScore();
			setHighScore();
			setNumberBoom();
		}

		var gameOver = function() {
			var bestScore = parseInt(localStorage.getItem("highScore"));
			if(score > bestScore) {
				localStorage.setItem("highScore", score);
			}
			booleanGameOver = true;
			hideAllMonster();
			disableAllMonster();
			$("<p class='gameOver'>GAME OVER</p>").appendTo(divScreen);
			$(".gameOver").css({
				"display": "block"
			});
		}

		var pause = function() {
			divScreen.css("opacity", "0.5");
			$("<p class='pause'>PAUSE GAME</p>").appendTo(divScreen);
			$(".pause").css({
				"display": "block"
			});
		}

		var rPause = function() {
			divScreen.css("opacity", "1");
			$(".pause").css({
				"display": "none"
			});
		}

		var main = function() {
			if(running) {
				showMonster(monsterOne);
				animate(monsterOne);
			}
		};
		init();
		main();
		drawAllHeart();
		setScore();
		setHighScore();
	});