/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number (곱하기, 나누기 1을 해도 형 변환 가능 변수 앞에 숫자를 붙여도 형변환 가능)
const YEAR = 2022;

console.log(typeof String(YEAR));

// undefined, null
console.log(String(undefined));
let days = null;
console.log(String(days));

// boolean
let isKind = true;
// console.log(String(isKind));
console.log(isKind + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed
console.log(Number(undefined)); //NaN : 이건 숫자가 아니야

// null
let money = null;
console.log(Number(money)); //0

// boolean
let cutie = true;
// console.log(Number(cutie));
console.log(cutie * 1); //변수 값이 true 면 1 false 는 0

// string 숫자형 문자

let num = '123';
console.log(num * 1);

// numeric string
let width = '320px';
// console.log(Number(width)); //이건 무슨짓을 해도 NaN뜬다
// console.log(parseInt(width,10)); //정수만 쏙 빼주는것
console.log(parseFloat(width,10)); //부동 소수점 까지 다 적어줌


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 
console.log(Boolean(null)); //null, undefined, NaN 같이 공백을 뜻한는건 false
/* 
0은 false '0'은 true
공백이 있으면 true
*/
