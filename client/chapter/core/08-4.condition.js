/* eslint-disable no-unused-vars */
/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress = (emailAddress === undefined || emailAddress === null) ? 'user@company.io' : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환


const WIDTH = '10px';
const INT = 0;
// button.style.height = INT || WIDTH // 0 = false라서 INT 값 못찾음
// button.style.height = INT ?? WIDTH // 0 = false라서 INT 값 찾음, 사용자가 임의로 넣었구나 로 인식


// console.log(null || WIDTH);
// console.log(null ?? WIDTH);

// console.log(undefined || WIDTH);
// console.log(undefined ?? WIDTH);

// console.log(false || WIDTH);
// console.log(false ?? WIDTH);

console.log("" || WIDTH);
console.log("" ?? WIDTH); //일부러 넣어놨다고 생각해서 빈문자가 뜬다









