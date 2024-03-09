"use strict";
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector(".question").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guessingNum = Number(document.querySelector(".number-input").value);
  console.log(guessingNum, typeof guessingNum);

  if (!guessingNum) {
    document.querySelector(".guess-message").textContent = "Введите число!";
    //win
  } else if (guessingNum === secretNumber) {
    document.querySelector(".guess-message").textContent = "Вы выйграли!";

    document.querySelector(".highscore").textContent = score;
    document.querySelector("body").style.backgroundColor = "rgb(9,250,46)";
    document.querySelector(".question").style.width = "50rem";
    document.querySelector(".question").textContent = guessingNum;

    //too small
  } else if (guessingNum < secretNumber) {
    if (score > 1) {
      document.querySelector(".guess-message").textContent = "Слишком мало!";
      score--;
      document.querySelector(".score").textContent = score;

      //loose
    } else {
      document.querySelector(".guess-message").textContent = "Вы проиграли!";
      document.querySelector(".score").textContent = 0;

      //too big
    }
  } else if (guessingNum > secretNumber) {
    if (score > 1) {
      document.querySelector(".guess-message").textContent = "Слишком много!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".guess-message").textContent = "Вы проиграли!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
