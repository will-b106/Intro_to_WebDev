
// Creates the variables needed and gets HTMl elements
let player = {name: "Player", chips: 100}
let clicks = 0;

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let hasChips = true;

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el") 
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
////////////////////////////////////////////////////////////

// Generating a random number/card
function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum
  }
}

// Removes buttons when player has no chips left
function hideButtons() {
    var buttons = document.querySelectorAll('.endGame');
    buttons.forEach(function(button) {
        button.style.display = 'none';
    });
}

// Main code for playing BlackJack
function renderGame() {
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " ";
    }
    // Checking different scenarios
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
      message = "Do you want to draw a new card?";
    } else if (sum === 21) {
      message = "You've got Blackjack!";
      hasBlackJack = true;
      player.chips += 10;
    } else {
      message = "You're out of the game!";
      isAlive = false;
      player.chips -= 10;
    }
    messageEl.textContent = message;
    playerEl.textContent = player.name + ": $" + player.chips;

  // Checking if player doesn't have any chips left
    if (player.chips <= 0) {
      isAlive === true;
      hasBlackJack === true;
      hasChips = false;
      hideButtons();
      playerEl.textContent = 'No more chips';
    }
}

// Starts a new game
function startGame() {
  if(hasChips === true) {
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    //let secondCard = getRandomCard();
    cards = [firstCard];
    sum = firstCard;

    renderGame();
  }
}

// Displays new card and adds the new card to the total sum
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}