var setupDiv= document.getElementById("setup");
var divClone = $("#setup").clone();
var player1;
var player2;
var moves=1;
var currentPlayer;
var activePlayer;
var gameStart=false;

function xClick()
{
	player1= 'X';
	player2= 'O';
	gameStart= true;
	console.log(player1);
	setupDiv.innerHTML= "Player 1 is 'X'<br> Player 2 is 'O'";

}

function oClick()
{
	player1= 'O';
	player2= 'X';
	gameStart= true;
	console.log(player1);
	setupDiv.innerHTML= "Player 1 is 'O'<br> Player 2 is 'X'";
}


$(".col-xs-1").click(function(){
	var getID = $(this).attr('id'); // to get the id
	var getClass = $(this).attr('class'); // to get the class
	var hasClass = (" " + getClass + " ").indexOf("clicked") > -1; //to check whether the class already exists
	if(moves%2==0 && gameStart && !hasClass) //player 2
	{
		$("#"+getID).addClass('clicked');
		$("#"+getID).text(player2);
		currentPlayer=player2;
		activePlayer='player2';
		console.log(currentPlayer);
		moves++;
		winChecker();
	}
	else if(moves%2==1 && gameStart && !hasClass) //player 1
	{
		$("#"+getID).addClass('clicked');
		$("#"+getID).text(player1);
		currentPlayer=player1;
		activePlayer='player1';
		console.log(currentPlayer);
		moves++;
		winChecker();
	}
})


function winChecker()
{
	switch (true) {
	    case $('#row1col1').text() === currentPlayer && $('#row1col2').text() === currentPlayer && //first row
	    $('#row1col3').text() === currentPlayer:
	      showVictory('#row1col1', '#row1col2', '#row1col3');
	      $("#result").text(activePlayer + " Won!!");
	      setTimeout(UpdateScore, 2000);
	      break;

	      case $('#row2col1').text() === currentPlayer && $('#row2col2').text() === currentPlayer && //second row
	      $('#row2col3').text() === currentPlayer:
	        showVictory('#row2col1', '#row2col2', '#row2col3');
	        $("#result").text(activePlayer + " Won!!");
	        setTimeout(UpdateScore, 2000);
	        break;

	      case $('#row3col1').text() === currentPlayer && $('#row3col2').text() === currentPlayer && //third row
	      $('#row3col3').text() === currentPlayer:
	        showVictory('#row3col1', '#row3col2', '#row3col3');
	        $("#result").text(activePlayer + " Won!!");
	        setTimeout(UpdateScore, 2000);
	        break;

	      case $('#row1col1').text() === currentPlayer && $('#row2col1').text() === currentPlayer && //first col
	      $('#row3col1').text() === currentPlayer:
	        showVictory('#row1col1', '#row2col1', '#row3col1');
	        $("#result").text(activePlayer + " Won!!");
	        setTimeout(UpdateScore, 2000);
	        break;

	      case $('#row1col2').text() === currentPlayer && $('#row2col2').text() === currentPlayer && //second col
	      $('#row3col2').text() === currentPlayer:
	        showVictory('#row1col2', '#row2col2', '#row3col2');
	        $("#result").text(activePlayer + " Won!!");
	        setTimeout(UpdateScore, 2000);
	        break;

	      case $('#row1col3').text() === currentPlayer && $('#row2col3').text() === currentPlayer && //third col
	      $('#row3col3').text() === currentPlayer:
	        showVictory('#row1col3', '#row2col3', '#row3col3');
	        $("#result").text(activePlayer + " Won!!");
	        setTimeout(UpdateScore, 2000);
	        break;


	      case $('#row1col1').text() === currentPlayer && $('#row2col2').text() === currentPlayer && //diagonal
	      $('#row3col3').text() === currentPlayer:
	        showVictory('#row1col1', '#row2col2', '#row3col3');
	        $("#result").text(activePlayer + " Won!!");
	        setTimeout(UpdateScore, 2000);
	        break;

	        case $('#row1col3').text() === currentPlayer && $('#row2col2').text() === currentPlayer && //diagonal
	      $('#row3col1').text() === currentPlayer:
	        showVictory('#row1col3', '#row2col2', '#row3col1');
	        $("#result").text(activePlayer + " Won!!");
	        setTimeout(UpdateScore, 2000);
	        break;


	      default:
	            DrawChecker();
	       }
}


function UpdateScore() {

  console.log(currentPlayer);
  $('.' + activePlayer).text(+$('.' + activePlayer).text() + 1);
  Clear();
}


function showVictory(pos1,pos2,pos3)
{
	  var $pos1 = $(pos1);
	  var $pos2 = $(pos2);
	  var $pos3 = $(pos3);
	  $pos1.addClass('winningComb');
	  $pos2.addClass('winningComb');
	  $pos3.addClass('winningComb');
}

function DrawChecker() {
  if (moves === 9 && gameStart) {
    setTimeout(Clear, 2000);
  }
};

function Clear()
{
	$("#result").text("");
	$('.col-xs-1').removeClass('clicked');
	$('.col-xs-1').removeClass('winningComb');
	$('.col-xs-1').empty();
	gameStart=false;
	moves=1;
	setupDiv.innerHTML=' Player 1 play as <button type="button" class="btn btn-primary icon" id="X" onclick="xClick()">X</button>or<button type="button" class="btn btn-primary icon" id="O" onclick="oClick()">O</button>?'
}
