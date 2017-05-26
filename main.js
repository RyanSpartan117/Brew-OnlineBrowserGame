$(init);

function init () {


	let game = new Game();

	//make a new instance of the Game object.
	game.gameInit();

}

class Game { 
	// Game object.

	constructor() {
		// "global" variables.
		this.isGameRunning = false; //change the game state to running or not running.
		this.mugs = ["#middleLeftDiv", "#middleRightDiv"];
		// this.leaderboardArray = [0, 0, 0, 0, 0];

	}

	gameInit () {
		//initialise the game.

		this.isGameRunning = true;
		this.instructions();
		this.buttonEvents();

		let startButton = $("#start");


		$(startButton).on("click", function(e) { //start button click event.


			$(this.mugs[0]).removeClass('leftDip');
			$(this.mugs[1]).removeClass('rightDip');

			this.reset();
			this.keyPresses();
			$(startButton).hide();

			setTimeout(function() { //hide the start button once it's been clicked for 6 seconds.
			$(startButton).show();
			}, 6000);

		}.bind(this)); // make the this inside the click function be the same as the outside this.
		
	}//end of gameInit

	instructions () {

		let closeButton = $("#closeButton");

		closeButton.click( function(e) { //instructions close button click event.

			$("#instructionModal").hide();

		})
	}//end of instructions

	buttonEvents () {
		//instruction button functionality. Future leaderboard functionality.

		let instructionButton = $("#instructionButton");
		let leaderboardButton = $("#leaderboardButton");
		let formButton = $("#formButton");
		let formButtonp2 = $("#formButtonp2");

		instructionButton.click( function(e){ //instruction button click function.

			$("#instructionModal").show();

		})

		

		formButton.click( function(e){ //player 1 name button click function.

			let leftName = $("#formName").val();
			$("#Player1name").html(leftName);

		})

		formButtonp2.click( function(e){ //player 2 name button click function.

			let rightName = $("#formNamep2").val();
			$("#Player2name").html(rightName);

		})

	}//end of buttonEvents

	keyPresses () {
		//A and L keyboard events.
	
		const scoreSide = ["#leftScore", "#rightScore"];

		$(document).on("keyup", function(e) { //keyup function for both A and L.

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

		}.bind(this)); //change this inside the keyup function to be the this in keyPresses.

		$(document).on("keydown" ,function(e) { //keydown function for both A and L.


			if(this.isGameRunning === false) {

					return;
				}
		    if(e.which == 65) {   //a key	    		

		    	$(this.mugs[0]).addClass('leftDip');
		    	$(this.mugs[0]).removeClass('middleLeftDiv');
		

		    } else if (e.which == 76) {    //l key	    		

				$(this.mugs[1]).addClass('rightDip');
				$(this.mugs[1]).removeClass('middleRightDiv');
		    }
		}.bind(this)) // make the this inside the keydown function be the same as the this in keyPresses.

	}//end of keyPresses ()

	keyPressCounter(side) {
		//score counter.

			let counter = $(side).html();
			let int = parseInt(counter);
			int = int + 1;
			$(side).html(int);
			return int;

	}//end of keyPressCounter

	timer (time) {
		//timer method.

		this.isGameRunning = true;
		this.loopTime = time;

		let interval = setInterval(function() { //timer loop. 

			if(this.loopTime === 1) {

				clearInterval(interval); //stops the loop from continuing once condition is met.
				this.stop();
				this.winner();

			} else {

				this.loopTime--;
				$("#time").html(this.loopTime); //Changes the visual timer on the game.

			}

		}.bind(this), 1000); //bind this inside the setInterval timer to be the same as the timer this.

	}//end of timer

	winner() {
		//check to see who won.

		let left = $("#leftScore").html();
		let right = $("#rightScore").html();
		let p1 = $("#Player1name").html();
		let p2 = $("#Player2name").html();


		if(left === right) {

			// this.leaderboardHandler(left);
			// this.leaderboardHandler(right);
			$("#displayWinner").html("It's a draw!");

		} else if( left > right){


			$("#displayWinner").html(p1 + " wins!");
			// this.leaderboardHandler(left);

		} else { 


			$("#displayWinner").html(p2 + " wins!");
			// this.leaderboardHandler(right);

		}

	}//end of winner

	// leaderboardHandler (winningNumber) {
	//	//leaderboard function.

	// 	this.leaderboardArray.push(winningNumber);
	// 	this.leaderboardArray.sort(function(a,b){return b-a});
	// 	this.leaderboardArray.pop();

	// 	console.log(this.leaderboardArray);
	// 	return this.leaderboardArray;

	// }//end of leaderboardHandler

	reset() {
		//restart the game.

		this.isGameRunning = true;	
		this.resetScores();
		this.timer(6);

	}//end of reset

	resetScores() {
		//reset the scores to 0.
		let left = $("#leftScore").html(0);
		let right = $("#rightScore").html(0);

	}//end of resetScores

	stop () {
		//stop the game.

		$(document).off();
		this.isGameRunning = false;

	}//end of stop
	
}//end of Game
