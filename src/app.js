/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //Variables
  let pint = ["♦", "♥", "♠", "♣"];
  let num = ["A", "J", "Q", "K", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  //Function Randomizer
  function randomizer() {
    let ranpint = Math.floor(Math.random() * pint.length);
    return ranpint;
  }

  function randomizer() {
    let rannum = Math.floor(Math.random() * num.length);
    return rannum;
  }

  //Function link
  document.getElementById("number-left").innerHTML = randomizer(num);
  document.getElementById("pinta").innerHTML = randomizer(pint);
  document.getElementById("number-right").innerHTML = randomizer(pint);
};
