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

  //Color Function
  function cardcolors() {
    const pos = randomizer(pint);
    if (pint[pos] === "♥" || pint[pos] === "♦") {
      let x, i;
      x = document.querySelector("#pinta-left");
      x.style.color = "red";
      i = document.querySelector("#pinta-right");
      i.style.color = "red";
    }
    //Function link

    document.getElementById("pinta-left").innerHTML = pint[pos];
    document.getElementById("number").innerHTML = num[pos];
    document.getElementById("pinta-right").innerHTML = pint[pos];
  }

  cardcolors();
};
