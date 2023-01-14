

/* eslint no-undef:'warn' */
/* eslint no-unused-vars: 'off' */







// 1. 인풋 벨류값 가져오기
// 2. 이벤트 핸들러 연결하기
// 3. 이벤트 기본동작 차단하기
// 4. 두 수의 합을 더해주기 
// 5. 화면에 출력하기


import { 
  getNode,
  sum,
  getInputValue,
  clearContents,
  insertLast,
  } from "./lib/index.js";






//1. 입력할 첫번째 칸과 두번째 칸의 노드를 가져옴
const firstInput = getNode('#firstNumber');
const secondInput = getNode('#secondNumber');
//2. 제출버튼의 노드를 가져옴
const done = getNode('#done');
//3. 결과를 출력하는 부분의 노드를 가져옴
const result = getNode('.result');



//5. 클릭이벤트 핸들러 받는 함수
function handler(e){
  // 6. 새로고침 안되도록
  e.preventDefault();
  // 7. 첫번째 칸과 두번째 칸의 벨류를 가져오는 함수 적용
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  // 8. sum 함수를 사용해서 더해주기
  let total = sum(firstValue, secondValue)


  // 9. result 쪽에 클리어 컨텐츠를 위한 것
  clearContents(result);
  //10. 넣어줌
  insertLast(result,total);
  // result에 값이 들어갈때 clearContent로 인해서 빨간 줄이 없어지고 값이 들어간다
  // 자바스크릡트는 한 줄 씩 실행되기 때문
}

// 추가 : 값을 화살표로 올리거나 내릴때 자동으로 값이 변환하도록 하는 이벤트 구현
// +2 change이벤트 함수
function inputHandler(){
  // +3 첫번째와 두번째 칸에 벨류를 받아오고 합을 도출(위와 같다)
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue)


  
  clearContents(result);

  insertLast(result,total);
}


// 4. 출력칸에 클릭 이벤트
done.addEventListener('click',handler)
// +1 change 라는 이벤트를 삽입
firstInput.addEventListener('change',inputHandler)
secondInput.addEventListener('change',inputHandler)