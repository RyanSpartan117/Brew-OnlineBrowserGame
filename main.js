$(function () {

	gameInit();
}) //end of start function.




function gameInit () {

	var mugs = ["#middleLeftDiv", "#middleRightDiv"];
	var scoreSide = ["#leftScore", "#rightScore"];

	$.each(mugs, function(i, name) {

		$(name).click(function(event) {

			console.log(name + " has been clicked");

			keyPressCounter(scoreSide[i]);
			console.log(scoreSide[i])
			//event.target is where the mouse has clicked.
		})

	})//end of clicks initiation

}//end of game initiation function

function keyPressCounter(side) {


	var counter = $(side).html();
	int = parseInt(counter);
	int ++;
	$(side).html(int);
	return int;

}

