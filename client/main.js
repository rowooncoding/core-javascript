import { diceAnimation, getNode } from "./lib/index.js";

let rollingDicebutton = getNode('.buttonGroup > button:nth-child(1)');

const handlerRollingDice = () => {
  diceAnimation();
}



rollingDicebutton.addEventListener('click',handlerRollingDice);








