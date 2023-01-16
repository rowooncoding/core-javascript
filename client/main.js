import { diceAnimation, getNode } from "./lib/index.js";

let rollingDicebutton = getNode('.buttonGroup > button:nth-child(1)');

let id = setInterval(() => {
  
}, 1000);

clearInterval(id)

const handlerRollingDice = () => {
  diceAnimation();
}



rollingDicebutton.addEventListener('click',handlerRollingDice);








