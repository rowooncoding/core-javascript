/* eslint-disable no-unused-vars */
/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// let number = prompt('숫자를 입력해 주세요', 0);

// if(number > 0) {
//   console.log(1);
// } else if (number < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

// let message = 
// (number > 0) ? '1' : 
// (number < 0) ? '-1' : 
// '아무것도 아닙니다';

// console.log(message);


// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = prompt('영화 봄?');

// 영화 볼거니?
let goingToWatchMovie = prompt('영화 안봄?');


// if 문(statement)
if(didWatchMovie === 'yes') {
  console.log('합격');
}else if(goingToWatchMovie === 'yes'){
  console.log(('합격'));
}else {
  console.log('불합격');
}


let movieMessage =
(didWatchMovie.includes('yes')) ? '굿' :
(goingToWatchMovie === 'yes') ? '굿' : '배드';
// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식