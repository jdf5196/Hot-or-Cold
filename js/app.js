$(document).ready(function(){

	var found = false;
	/*--- Create a random number ---*/
		var randomNumber = Math.floor((Math.random() *100)+1);
			console.log(randomNumber);
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Start a new game ---*/
  	$(".new").click(function(e){
  		e.preventDefault();
  		randomNumber = Math.floor((Math.random() *100)+1);
  		console.log(randomNumber);
  		$("#feedback").text("Make your Guess!");
  		$('#count').text(0);
  		$('#guessList').html('');
  	});

  	/*--- Guess Button Click ---*/
  	$('#guessButton').click(function(e) {
  		e.preventDefault();
  		var userNumber = parseInt($('#userGuess').val());

  		if(isNaN(userNumber)) {
  			$('#feedback').text("Enter a Number");
  		}
  		else if (userNumber > 100) {
  			$('#feedback').text("Enter a Number between 1 and 100");
  		}
  		else if (userNumber < 1) {
  			$('#feedback').text("Enter a Number between 1 and 100");
  		}
  		else if (userNumber == randomNumber) {
  			$('#feedback').text("Correct! " + randomNumber);
  			found=true
  		}
  		else if (userNumber >= randomNumber -5 && userNumber <= randomNumber +5) {
  			$('#feedback').text("You're on Fire!");
  		}
  		else if (userNumber >= randomNumber -10 && userNumber <= randomNumber +10){
  			$('#feedback').text("You're getting Hot!");
  		}
  		else if (userNumber >= randomNumber -20 && userNumber <= randomNumber +20) {
  			$('#feedback').text("You're getting warm.");
  		}
  		else if (userNumber >= randomNumber -30 && userNumber <= randomNumber -30) {
  			$('#feedback').text("You're cool");
  		}
  		else {
  			$('#feedback').text("You're freezing...");
  		}
  		if (found = true){
  			function disable(){
  				$('#guessButton').disabled = true;
  			}
  		};	
  		$('#count').text((parseInt($('#count').text())+1));
  		$('#guessList').append('<li>'+userNumber+'</li>')
  		$('#userGuess').val('')

  	});

});

