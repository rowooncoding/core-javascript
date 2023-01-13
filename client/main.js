/* eslint-disable no-undef */



/* eslint no-undef:'warn' */
/* eslint no-unused-vars: 'off' */



// 1. 인풋 벨류값 가져오기
// 2. 이벤트 핸들러 연결하기
// 3. 이벤트 기본동작 차단하기
// 4. 두 수의 합을 더해주기 
// 5. 화면에 출력하기

//모듈
import { 
  getNode,
  css,
  addClass,
  removeClass, 
} from "./lib/index.js";




// 인풋 가져오기
const firstInput = getNode('#firstNumber');
const secondInput = getNode('#secondNumber');
// 출력버튼 가져오기
const done = getNode('#done');

//인풋 벨류값 가져오는 유틸함수
function getInputValue(node){
  if(typeof node === 'string') node = getNode(node);
  if(node.tagName !== 'INPUT') refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다.')
  return node.value
}


// const sum = (valueA,valueB) => valueA + valueB;

//두개의 값을 더해주는 유틸함수
function sum(valueA,valueB){
  return valueA + valueB;
}

// 컨텐트를 없애줌 노드가 잡혔을때
function clearContents(node){
  if(typeof node === 'string') node = getNode(node);
  node.textContent = '';
}

// 이벤트 핸들러 함수
function handler(e){
  e.preventDefault();

  //firstInput : 노드, getInputValue : 벨류값(여기서는 숫자) -> fristvalue에 할당
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  //위의 두개의 값을 더해주는 함수 사용
  let total = sum(firstValue, secondValue)

  console.log( total );

  //리저트 빨간 줄 없애주고
  clearContents('.result');
 //빨간 줄 끝에 값 출력
  insertLast('.result',total);
  
}
//실시간 값 변경 함수
function inputHandler(){
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue)

  console.log( total );

  
  clearContents('.result');

  insertLast('.result',total);
}


done.addEventListener('click',handler);

firstInput.addEventListener('change',inputHandler);
secondInput.addEventListener('change',inputHandler);


















