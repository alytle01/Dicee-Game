const result = document.getElementById("status");
const button = document.getElementById("rollDice");
const die1 = document.getElementById("img1");
const die2 = document.getElementById("img2");

function getRandomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

function changeDie(rNum) {
  return `./images/dice${rNum}.png`;
}

function changeButton(statement) {
  button.innerHTML = statement;
}

function displayResults(statement) {
  result.innerHTML = statement;
}

function whoWon(rNum1, rNum2) {
  if (rNum1 == 1 && rNum2 == 1) {
    displayResults("🐍 Snake 👀 Eyes 🐍");
  } else if (rNum1 === rNum2) {
    displayResults("Draw!");
  } else if (rNum1 > rNum2) {
    displayResults("🚩 Player 1 Wins!");
  } else {
    displayResults("Player 2 Wins! 🚩");
  }
}

button.addEventListener("click", function () {
  changeButton("Lady Luck Says");
  var rNum1 = getRandomNumber();
  var rNum2 = getRandomNumber();
  die1.src = changeDie(rNum1);
  die2.src = changeDie(rNum2);
  whoWon(rNum1, rNum2);
  setTimeout(() => {
    changeButton("Let 'em Roll");
  }, 1000);
});
