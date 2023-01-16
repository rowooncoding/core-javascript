import { diceAnimation, getNode } from "./lib/index.js";

let rollingDicebutton = getNode('.buttonGroup > button:nth-child(1)');


const handlerRollingDice = () => {
  let stopAnimation
  let isRolling = false;

  return function(){
  if(!isRolling){
  stopAnimation =  setInterval(diceAnimation,100)
  }else {
  clearInterval(stopAnimation);
  }
  // 계속 false 값이 나오니까 값 반전해서 else값이 가능하도록
  isRolling = !isRolling;
}
  
}
// 현재는 함수 자체가 튀어 나와서 실행 안됨!


rollingDicebutton.addEventListener('click',handlerRollingDice());
// 안에있는 함수를 실행하기 위해서 클릭할때 실행 -> 한번 더 실행







