/* eslint-disable no-unused-vars */
/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

// let i = 0;
// while(i < 10) {
//   console.log('안녕')
//   i++;
// }




const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);




/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */


// while 문 (순환 : 순방향)

// let i = 0;
// while(i < frontEndDev.length) {
//   let value = frontEndDev[i];
//   console.log(value);
//   i++;
// }

// while 문 (역순환 : 역방향)
// let j = frontEndDev.length -1;
// while(j >= 0) {
//   console.log(frontEndDev[j])
//   j--
// }

/* 전개 구문 */
  // let copyArray = [...frontEndDev];
  let copyArray = frontEndDev.slice();

  while(copyArray.length){
    console.log(copyArray.pop());
  }

/* 배열의 능력 팝!! -> 제거된 요소가 툭 튀어나온다 단, 기존 배열은 없어짐 다 내보냈기 때문에 */ 
// while(frontEndDev.length){
//   console.log(frontEndDev.pop());
// }

/* shift는 앞에서 부터 빼낸다 */
// while(frontEndDev.length){
//   console.log(frontEndDev.shift());
// }

// 성능 진단 : 순환 vs. 역순환
/* 
성능적인 면에서는 역순환으로 도는게 좋다
근데 짧은 반복문에서는 별로 상관없다
*/