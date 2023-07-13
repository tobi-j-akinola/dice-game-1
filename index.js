const randomVariable1 = Math.floor(Math.random() * 6) + 1;
const randomVariable2 = Math.floor(Math.random() * 6) + 1;

const diceImage1 = `images/dice${randomVariable1}.png`;
const diceImage2 = `images/dice${randomVariable2}.png`;

document.querySelector("img.img1").setAttribute("src", diceImage1);
document.querySelector("img.img2").setAttribute("src", diceImage2);

console.log(randomVariable1);
console.log(randomVariable2);

function titleWinner() {
  if (randomVariable1 > randomVariable2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (randomVariable2 > randomVariable1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Its a draw!";
  }

}
titleWinner()