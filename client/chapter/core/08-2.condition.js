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

// 대소문자 구분 안하고 입력 가능하도록 하기

/* tolowercase -> 취소 했을 경우에 null이 되는데 null.tolowercase는 효과가 없어서 에러가 난다! */
/* 옵셔널 체이닝! -> 물음표를 붙인다 -> null이나 undefiend를 만나면 함수를 실행시지 않는 property*/
if(userName?.toLowerCase === 'admin') {
  let pw = prompt('비밀번호를 입력해 주세요','');
  
  if(pw?.toLowerCase === 'themaster'){
    console.log('환영합니다');
  }else {
    console.log('취소되었습니다');
  }
  // 공백만나면 else if 가 실행되지 않는 문제 해결 -> 정규 표현식 사용 .replace(/\s*/g,'')
}else if(userName.replace(/\s*/g,'') === '' || userName === null) {
  console.log('취소됐습니다.');
}else {
  console.log('인증되지 않은 사용자 입니다');
}