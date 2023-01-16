import { diceAnimation, getNode, getNodes} from "./lib/index.js";

// let rollingDicebutton = getNode('.buttonGroup > button:nth-child(1)');
// let recordButton = getNode('.buttonGroup > button:nth-child(2)');
// let resetButton = getNode('.buttonGroup > button:nth-child(3)');

const [rollingDicebutton, recordButton, resetButton] = getNodes('.buttonGroup > button');

const handlerRollingDice = (()=>{
  let stopAnimation
  let isRolling = false;

  return function(){
  if(!isRolling){
  stopAnimation =  setInterval(diceAnimation,100)
  recordButton.disabled = true;

  }else {
  clearInterval(stopAnimation);
  recordButton.disabled = false;
  }
  isRolling = !isRolling;
} 
})()
//IIFE 한번 실행 -> 또 실행

rollingDicebutton.addEventListener('click',handlerRollingDice);
// 안에있는 함수를 실행하기 위해서 클릭할때 실행 -> 한번 더 실행
// 근데 나는 여기다가 안하고싶어 -> iife






