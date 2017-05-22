$(function () {

	gameInit();
}) //end of start function.




function gameInit () {

	var mugs = ["#middleLeftDiv", "#middleRightDiv"];

	$.each(mugs, function(i, name) {

		$(name).click(function(event) {

			console.log(name + " has been clicked");
			//event.target is where the mouse has clicked.
		})

	})//end of clicks initiation

}//end of game initiation function

function keyPressCounter() {
	

	
}