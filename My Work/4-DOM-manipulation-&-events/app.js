/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, diceDOM;

scores = [0, 0];
roundScore = 0;
activePlayer = 0; // 0: player 1, 1: player 2
document.querySelector('.dice').style.display = 'none';
diceDOM = document.querySelector('.dice');

function newGame() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  for (var i = 0; i < 2; i++) {
    document.querySelector('#score-' + i).textContent = 0;
    document.querySelector('#current-' + i).textContent = 0;
  }
  if (!document.querySelector('.player-0-panel').hasClass('active')) {
    document.querySelector('.player-0-panel').addClass('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
  }
  document.querySelector('.dice').style.display = 'none';
}

/* 'roll' as an addEventListener argument is called a callback function:
  it is not called, but is referenced so that another method can call it */
document.querySelector('.btn-roll').addEventListener('click', function() {
  diceDOM.style.display = 'block';
  dice = Math.floor(Math.random() * 6) + 1;
  diceDOM.src = 'dice-' + dice + '.png';
  if (dice !== 1) {
    roundScore = activeScore() + dice;
    document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + roundScore + '</em>';
  } else {
    document.querySelector('#current-' + activePlayer).textContent = 0;
    changePlayer();
    document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + 0 + '</em>';
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  scores[activePlayer] += activeScore();
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  document.querySelector('#current-' + activePlayer).textContent = 0;
  changePlayer();
  diceDOM.style.display = 'none';
});

document.querySelector('.btn-new').addEventListener('click', function() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  for (var i = 0; i < 2; i++) {
    document.querySelector('#score-' + i).textContent = 0;
    document.querySelector('#current-' + i).textContent = 0;
  }
  if (!document.querySelector('.player-0-panel').hasClass('active')) {
    document.querySelector('.player-0-panel').addClass('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
  }
  document.querySelector('.dice').style.display = 'none';
});

function changePlayer() {
  activePlayer = (activePlayer === 1) ? 0 : 1;
  document.querySelector('.active').classList.toggle('active');
  document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
}

var activeScore = function() {
  return parseInt(document.querySelector('#current-' + activePlayer).textContent);
}
