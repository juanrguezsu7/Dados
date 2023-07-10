document.querySelector("button").addEventListener("click", function() {
  var firstRandom = Math.random();
  firstRandom *= 6;
  ++firstRandom;
  firstRandom = Math.floor(firstRandom);
  var secondRandom = Math.random();
  secondRandom *= 6;
  ++secondRandom;
  secondRandom = Math.floor(secondRandom);
  var newFirstImage = "./assets/images/dice" + firstRandom.toString() + ".png";
  var newSecondImage = "./assets/images/dice" + secondRandom.toString() + ".png";
  document.querySelector(".first-dice").setAttribute("src", newFirstImage);
  document.querySelector(".second-dice").setAttribute("src", newSecondImage);
  document.querySelector(".first-dice").classList.toggle("dice-transition");
  document.querySelector(".second-dice").classList.toggle("dice-transition");
});