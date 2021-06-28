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
    const simbol = randomizer(pint);
    if (simbol === "♥" || simbol === "♦");
    {
      let x, i;
      x = document.querySelectorAll(".card");
      for (i = 0; i < x.length; i++) {
        x[i].style.color = "red";
      }
    }
    //Function link
    let pos = randomizer(pint);
    document.getElementById("pinta-left").innerHTML = pint[pos];
    document.getElementById("number").innerHTML = num[pos];
    document.getElementById("pinta-right").innerHTML = pint[pos];
  }

  cardcolors();
};
