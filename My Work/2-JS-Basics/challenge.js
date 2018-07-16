
var height1 = prompt('Player 1:\n\nEnter your height in centimeters...');
var height2 = prompt('Player 2:\n\nEnter your height in centimeters...');
var height3 = prompt('Player 3:\n\nEnter your height in centimeters...');
var age1 = prompt('Player 1:\n\nEnter your age in years...');
var age2 = prompt('Player 2:\n\nEnter your age in years...');
var age3 = prompt('Player 3:\n\nEnter your age in years...');

var player1Score = parseInt(height1) + 5 * age1;
var player2Score = parseInt(height2) + 5 * age2;
var player3Score = parseInt(height3) + 5 * age3;

if (player1Score < player2Score && player3Score < player2Score) {
  alert('Player 2 Wins!\n\nScores:\n\tPlayer 1: ' + player1Score + '\n\tPlayer 2: ' + player2Score + '\n\tPlayer 3: ' + player3Score);
} else if (player2Score < player1Score && player3Score < player1Score) {
  alert('Player 1 Wins!\n\nScores:\n\tPlayer 1: ' + player1Score + '\n\tPlayer 2: ' + player2Score + '\n\tPlayer 3: ' + player3Score);
} else if (player1Score < player3Score && player2Score < player3Score) {
  alert('Player 3 Wins!\n\nScores:\n\tPlayer 1: ' + player1Score + '\n\tPlayer 2: ' + player2Score + '\n\tPlayer 3: ' + player3Score);
} else {
  alert("It's a draw!\n\nScores\n\tPlayer 1: " + player1Score + "\n\tPlayer 2: " + player2Score + '\n\tPlayer 3: ' + player3Score);
}
