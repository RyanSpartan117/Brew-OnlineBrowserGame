var isGameRunning = true;

$(function () {

	gameInit();

}) //end of start function.



function gameInit () {

	var mugs = ["#middleLeftDiv", "#middleRightDiv"];
	var scoreSide = ["#leftScore", "#rightScore"];
	var down = false;

	if(!isGameRunning)
	$(document).keyup(function(e) {

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


	loopTime = time;

	console.log("intTime: " + time);

	var interval = setInterval(function() {

		if(loopTime === 0) {

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

}



function stop () {

	isGameRunning = false;

}