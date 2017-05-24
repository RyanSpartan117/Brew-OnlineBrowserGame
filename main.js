$(init);

function init () {


	let game = new Game();

	game.gameInit();

}

class Game {

	constructor() {
		this.isGameRunning = false;
		this.mugs = ["#middleLeftDiv", "#middleRightDiv"];

	}

	gameInit () {

		this.isGameRunning = true;

		let startButton = $("#start")
		let down = false;


		$(startButton).on("click", function(e) {

			$(this.mugs[0]).removeClass('leftDip');
			$(this.mugs[1]).removeClass('rightDip');

			this.reset();
			this.keyPresses();
			$(startButton).hide();

			setTimeout(function() {
				$(startButton).show();
			}, 6000);

		}.bind(this));
		
	}

	keyPresses () {
	
	const scoreSide = ["#leftScore", "#rightScore"];
	$(document).on("keyup", function(e) {

		if(this.isGameRunning === false) {

		return;
		}

		if(e.which == 65) {    // a key
			

			$(this.mugs[0]).addClass('middleLeftDiv');
			$(this.mugs[0]).removeClass('leftDip');

			this.keyPressCounter(scoreSide[0]);


		} else if (e.which == 76) {    //  l key
			
			$(this.mugs[1]).addClass('middleRightDiv');
			$(this.mugs[1]).removeClass('rightDip');	

			this.keyPressCounter(scoreSide[1]);

		}

	}.bind(this));

	$(document).on("keydown" ,function(e) {


		if(this.isGameRunning === false) {

				return;
			}
	    if(e.which == 65) {

	    	// down = true;
	    		//a key

	    	$(this.mugs[0]).addClass('leftDip');
	    	$(this.mugs[0]).removeClass('middleLeftDiv');
	

	    } else if (e.which == 76) {
	    		//l key

			$(this.mugs[1]).addClass('rightDip');
			$(this.mugs[1]).removeClass('middleRightDiv');
	    }
	}.bind(this))


	}//end of keyPresses ()

	keyPressCounter(side) {
		
			let counter = $(side).html();
			let int = parseInt(counter);
			int = int + 1;
			$(side).html(int);
			return int;
		}

	timer (time) {

		this.isGameRunning = true;
		this.loopTime = time;

		let interval = setInterval(function() {

			if(this.loopTime === 1) {

				clearInterval(interval);
				this.stop();
				this.winner();

			} else {

				this.loopTime--;
				$("#time").html(this.loopTime);

			}
		}.bind(this), 1000);
	}

	winner() {

		let left = $("#leftScore").html();
		let right = $("#rightScore").html();

		if(left === right) {

			alert("it's a draw!");

		} else if( left > right){

			alert("player 1 wins!");
		} else { 

			alert("player 2 wins!");
		}
	}

	reset() {
		this.isGameRunning = true;	
		this.resetScores();
		this.timer(6);

	}

	resetScores() {

		let left = $("#leftScore").html(0);
		let right = $("#rightScore").html(0);
	}

	stop () {

		$(document).off();
		this.isGameRunning = false;

	}
	
}
