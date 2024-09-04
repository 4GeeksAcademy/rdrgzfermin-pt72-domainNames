/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
const generateDomainNames = () => {
  let one = ["the", "our", "their", "this"];
  let two = ["great", "big", "wrathful", "meek"];
  let three = ["jogger", "racoon", "passion", "estate"];
  let four = [".com", ".org", ".gov", ".net"];

  for (let i = 0; i < one.lenght; i++) {
    for (let a = 0; a < two.lenght; i++) {
      for (let b = 0; b < three.lenght; i++) {
        for (let c = 0; c < four.lenght; i++) {
          console.log(one[i] + two[a] + three[b] + four[c]);
        }
      }
    }
  }
};
console.log(generateDomainNames);
