// create a randomized system for each dice

let randomNumber1 = Math.floor(Math.random() * 6) +1;// random number 1-6
let randomDiceImg = "dice" + randomNumber1 + ".png";// dice1.png - 6
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" + randomImgSource);

let randomNumber2 =  Math.floor(Math.random() * 6 +1);
console.log(randomNumber1);

let randomImgSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);

// player 1 wins
if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆Player 1 Wins!"

}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎲 Player 2 Wins!"

}else {
  doNotTrack.querySelector("h1").innerHTML = "Draw"
}