/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //Variables
  let pint = ["♦", "♥", "♠", "♣"];
  let num = ["A", "J", "Q", "K", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  //Function Randomizer
  function randomizer(arr) {
    let pos = Math.floor(Math.random() * arr.length);
    return pos;
  }

  //Function link
  let pos = randomizer(pint);
  document.getElementById("number-left").innerHTML = pint[pos];
  document.getElementById("pinta").innerHTML = randomizer(num);
  document.getElementById("number-right").innerHTML = pint[pos];
};
