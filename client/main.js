import { diceAnimation, getNode } from "./lib/index.js";

let rollingDicebutton = getNode('.buttonGroup > button:nth-child(1)');


const handlerRollingDice = () => {
  let stopAnimation
  let isRolling = false;
  
  return function(){if(!isRolling){
    stopAnimation =  setInterval(diceAnimation,100)
  }else {
    clearInterval(stopAnimation);
  }
  // 계속 false 값이 나오니까 값 반전해서 else값이 가능하도록
  isRolling = !isRolling;
}
  
}



rollingDicebutton.addEventListener('click',handlerRollingDice);








