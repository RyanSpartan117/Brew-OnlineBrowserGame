var isGameRunning = true;
var mugs = ["#middleLeftDiv", "#middleRightDiv"];

$(() => gameInit()); //end of start function.



function gameInit () {

	var startButton = $("#start")
	var down = false;


	$(startButton).on("click", function(e) {

		
		console.log("startbutton");

		
		
		$(mugs[0]).removeClass('leftDip');
		$(mugs[1]).removeClass('rightDip');


		reset();
		keyPresses();
		$(startButton).hide();
		setTimeout(function() {
			$(startButton).show();
		}, 6000);

	})

}

function keyPresses () {
	

	



	var scoreSide = ["#leftScore", "#rightScore"];
	$(document).on("keyup", (e) => {

		if(!isGameRunning) {

		return;
		}

		if(e.which == 65) {
			//a key

			down = false;

			keyPressCounter(scoreSide[0]);

			$(mugs[0]).addClass('middleLeftDiv');
			$(mugs[0]).removeClass('leftDip');

		} else if (e.which == 76) {
			//l key

			keyPressCounter(scoreSide[1]);



			$(mugs[1]).addClass('middleRightDiv');
			$(mugs[1]).removeClass('rightDip');
		}


	})

	$(document).on("keydown" ,function(e) {

		if(!isGameRunning) {

				return;
			}
	    if(e.which == 65) {

	    	down = true;
	    		//a key

	    	$(mugs[0]).addClass('leftDip');
	    	$(mugs[0]).removeClass('middleLeftDiv');
	

	    } else if (e.which == 76) {
	    		//l key

			$(mugs[1]).addClass('rightDip');
			$(mugs[1]).removeClass('middleRightDiv');
	    }
	})


}




function keyPressCounter(side) {

	var counter = $(side).html();
	var int = parseInt(counter);
	int = int + 1;
	$(side).html(int);
	return int;
}


function timer (time) {
		isGameRunning = true;


	loopTime = time;

	console.log("intTime: " + time);

	var interval = setInterval(function() {

		if(loopTime === 1) {

			console.log("stop");
			clearInterval(interval);
			stop();
			winner();

		} else {

			
			loopTime--;
			$("#time").html(loopTime);

		}
	}, 1000);
}

function winner() {

	var left = $("#leftScore").html();
	
	var right = $("#rightScore").html();

	if(left === right) {

		alert("it's a draw!");

	} else if( left > right){

		alert("player 1 wins!");
	} else { 

		alert("player 2 wins!");
	}
}



function reset() {

	isGameRunning = true;
	resetScores();
	timer(6);

}

function resetScores() {

	var left = $("#leftScore").html(0);
	var right = $("#rightScore").html(0);
}



function stop () {

	$(document).off();
	isGameRunning = false;

}


// class Game {
// 	constructor(width) {
// 		this.width = width;
// 		this.isGameRunning = false;
// 	}

// 	resetScores() {
// 		console.log("In all my logic, the board width is " + this.width);
// 		$("#leftScore").on("click", () => {
// 			this.isGameRunning = true;
// 			console.log(this)
// 		});
// 	}
// }

// let game = new Game(3);
// game.board = new Board(4);



// console.log(game)






























