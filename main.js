$(init);

function init () {


	let game = new Game();

	game.gameInit();

}

class Game {

	constructor() {

		this.isGameRunning = false;
		this.mugs = ["#middleLeftDiv", "#middleRightDiv"];
		this.leaderboardArray = [0, 0, 0, 0, 0];

	}

	gameInit () {

		this.isGameRunning = true;
		this.instructions();
		this.buttonEvents();

		let startButton = $("#start");


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
		
	}//end of gameInit

	instructions () {

		let closeButton = $("#closeButton");

		closeButton.click( function(e) {

			$("#instructionModal").hide();

		})
	}//end of instructions

	buttonEvents () {

		let instructionButton = $("#instructionButton");
		let leaderboardButton = $("#leaderboardButton");
		let formButton = $("#formButton");
		let formButtonp2 = $("#formButtonp2");

		instructionButton.click( function(e){

			$("#instructionModal").show();
		})

		

		formButton.click( function(e){

			let leftName = $("#formName").val();
			$("#Player1name").html(leftName);



		})

		formButtonp2.click( function(e){

			let rightName = $("#formNamep2").val();
			$("#Player2name").html(rightName);



		})

	}//end of buttonEvents

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
	}//end of keyPressCounter

	winner() {

		let left = $("#leftScore").html();
		let right = $("#rightScore").html();
		let p1 = $("#Player1name").html();
		let p2 = $("#Player2name").html();


		if(left === right) {

			this.leaderboardHandler(left);
			this.leaderboardHandler(right);

			
			$("#displayWinner").html("It's a draw");

		} else if( left > right){


			$("#displayWinner").html(p1 + " wins!");
			this.leaderboardHandler(left + " wins!");

		} else { 


			$("#displayWinner").html(p2);
			this.leaderboardHandler(right);

		}
	}//end of winner

	leaderboardHandler (winningNumber) {

		this.leaderboardArray.push(winningNumber);
		this.leaderboardArray.sort(function(a,b){return b-a});
		this.leaderboardArray.pop();

		console.log(this.leaderboardArray);
		return this.leaderboardArray;


	}

	reset() {
		this.isGameRunning = true;	
		this.resetScores();
		this.timer(6);

	}//end of reset

	resetScores() {

		let left = $("#leftScore").html(0);
		let right = $("#rightScore").html(0);

	}//end of resetScores

	stop () {

		$(document).off();
		this.isGameRunning = false;

	}//end of stop
	
}
