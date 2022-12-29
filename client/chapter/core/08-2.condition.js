/* eslint-disable no-unused-vars */
/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

// let age = 20;

// if(age >= 14 && age <= 90) {
//   console.log('합격');
// } 



let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [ ] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || ' ' || [2,3].length || {thisTruthy:true};

/* 로그인 구현하기 */
let userName = prompt('사용자 이름을 입력해주세요','');


if(userName === 'Admin') {
  let pw = prompt('비밀번호를 입력해 주세요','');
  
  if(pw === 'TheMaster'){
    console.log('환영합니다');
  }else {
    console.log('취소되었습니다');
  }
  
}else if(userName === '' || userName === null) {
  console.log('취소됐습니다.');
}else {
  console.log('인증되지 않은 사용자 입니다');
}

console.log(userName);