var isGameRunning = true;
var mugs = ["#middleLeftDiv", "#middleRightDiv"];

$(function () {

	gameInit();

}) //end of start function.



function gameInit () {

	var startButton = $("#start")
	var down = false;


	$(startButton).click(function(e) {

		console.log("startbutton");

		$(mugs[0]).html(0);
		$(mugs[1]).html(0);
		$(mugs[0]).removeClass('leftDip');
		$(mugs[1]).removeClass('rightDip');


		start();
		keyPresses();

	})

}

function keyPresses () {
	



	var scoreSide = ["#leftScore", "#rightScore"];
	$(document).keyup(function(e) {

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

	$(document).keydown(function(e) {

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
	int = parseInt(counter);
	int ++;
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

		} else {

			
			loopTime--;
			$("#time").html(loopTime);

		}
	}, 1000);
}

function start () {


	isGameRunning = true;
	timer(6);

}



function stop () {

	isGameRunning = false;

}