$(function () {

	gameInit();
}) //end of start function.




function gameInit () {


	// $.each(mugs, function(i, name) {

	// 	$(name).keydown(function(e) {

	// 		if(e.which == 65) {

	// 			console.log(name);
	// 		} else if (e.which == 76) {

	// 			console.log(name);


	// 		}



	// 		//event.target is where the mouse has clicked.
	// 	})

	// }) //end of .each	
	


	var mugs = ["#middleLeftDiv", "#middleRightDiv"];
	var scoreSide = ["#leftScore", "#rightScore"];
	var down = false;

	$(document).keyup(function(e) {

		if(e.which == 65) {

			down = false;

			console.log("up");
			keyPressCounter(scoreSide[0]);

			$(mugs[0]).addClass('middleLeftDiv');
			$(mugs[0]).removeClass('leftDip');

		} else if (e.which == 76) {

			keyPressCounter(scoreSide[1]);



			$(mugs[1]).addClass('middleRightDiv');
			$(mugs[1]).removeClass('rightDip');
		}


	})

	$(document).keydown(function(e) {
	    if(e.which == 65) {

	    	down = true;
	    		//a key
	    	console.log("down");

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

