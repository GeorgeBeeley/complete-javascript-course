/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, limit, diceDOM;

scores = [0, 0];
roundScore = 0;
activePlayer = 0; // 0: player 1, 1: player 2
limit = 100;
document.querySelector('.dice').style.display = 'none';
diceDOM = document.querySelector('.dice');
holdButtonDOM = document.querySelector('.btn-hold');
newButtonDOM = document.querySelector('.btn-new');
rollButtonDOM = document.querySelector('.btn-roll');

function changePlayer() {
  document.querySelector('#current-' + activePlayer).textContent = 0;
  activePlayer = (activePlayer === 1) ? 0 : 1;
  document.querySelector('.active').classList.toggle('active');
  document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
}

var activeScore = function() {
  return parseInt(document.querySelector('#current-' + activePlayer).textContent);
}

/* 'roll' as an addEventListener argument is called a callback function:
  it is not called, but is referenced so that another method can call it */
rollButtonDOM.addEventListener('click', function() {
  diceDOM.style.display = 'block';
  dice = Math.floor(Math.random() * 6) + 1;
  diceDOM.src = 'dice-' + dice + '.png';
  if (dice !== 1) {
    roundScore = activeScore() + dice;
    document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + roundScore + '</em>';
  } else {
    changePlayer();
    document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + 0 + '</em>';
  }
});

holdButtonDOM.addEventListener('click', function() {
  scores[activePlayer] += activeScore();
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  // player wins
  if (scores[activePlayer] >= limit ) {
    document.querySelector('#name-' + activePlayer).textContent = 'winner';
    diceDOM.style.display = 'none';
    rollButtonDOM.disabled = true;
    holdButtonDOM.disabled = true;
  // doesn't win, next player
  } else {
    changePlayer();
    diceDOM.style.display = 'none';
  }
});

newButtonDOM.addEventListener('click', function() {
  scores = [0, 0];
  roundScore = 0;
  document.querySelector('#name-' + activePlayer).textContent = 'Player ' + (activePlayer + 1);
  activePlayer = 0;
  rollButtonDOM.disabled = false;
  holdButtonDOM.disabled = false;
  for (var i = 0; i < 2; i++) {
    document.querySelector('#score-' + i).textContent = 0;
    document.querySelector('#current-' + i).textContent = 0;
  }
  if (!document.querySelector('.player-0-panel').classList.contains('active')) {
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
  }
  diceDOM.style.display = 'none';
});
