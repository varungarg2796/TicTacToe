var setupDiv= document.getElementById("setup");
var player1;
var player2;
var moves=1;
var currentPlayer;
var gameStart=false;


$("#X").click(function(){
		player1= 'X';
		player2= 'O';
		gameStart= true;
		console.log(player1);
		setupDiv.innerHTML= "Player 1 is 'X'<br> Player 2 is 'O'";
})

$("#O").click(function(){
		player1= 'O';
		player2= 'X';
		gameStart= true;
		console.log(player1);
		setupDiv.innerHTML= "Player 1 is 'O'<br> Player 2 is 'X'";
})

$(".col-xs-1").click(function(){
	var getID = $(this).attr('id'); // to get the id
	var getClass = $(this).attr('class'); // to get the class
	var hasClass = (" " + getClass + " ").indexOf("clicked") > -1; //to check whether the class already exists
	if(moves%2==0 && gameStart && !hasClass) //player 2
	{
		$("#"+getID).addClass('clicked');
		$("#"+getID).text(player2);
		currentPlayer=player2;
		console.log(currentPlayer);
		moves++;
		winChecker();
	}
	else if(moves%2==1 && gameStart && !hasClass) //player 1
	{
		$("#"+getID).addClass('clicked');
		$("#"+getID).text(player1);
		currentPlayer=player1;
		console.log(currentPlayer);
		moves++;
		winChecker();
	}
})


function winChecker()
{
	switch (true) {
	    case $('#row1col1').text() === currentPlayer && $('#row1col2').text() === currentPlayer &&
	    $('#row1col3').text() === currentPlayer:
	      showVictory('#row1col1', '#row1col2', '#row1col3');
	      gameStart = false;
	      console.log("You won!");
	      //setTimeout(UpdateScore, 1000);
	      break;


	      default:
	            console.log("It is a draw");
	       }
}

function showVictory(pos1,pos2,pos3)
{

}

function DrawChecker() {
  if (moves === 9 && gameStart) {
    setTimeout(Clear, 1000);
  }
};