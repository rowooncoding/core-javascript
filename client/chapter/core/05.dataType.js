/* eslint-disable no-unused-vars */
/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null);

// 2. 값이 할당되지 않은 상태
console.log(undefined);
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1 = "hello"
let nickname = 'Rowoon'
let message3 = `안녕 내 이름은 ${nickname} 이야`;

console.log(message3);
// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 100.123

console.log(`number : ` ,typeof number);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(typeof 12913n); //bigint

// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {});

// 8. 고유한 식별자(unique identifier)
console.log(typeof Symbol('uid'));

console.log(typeof Math);

const fuc = function (){

}


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류



// Object
/* key value */
// const user = new Object() // 생성자 함수를 사용할 수도 있는데 귀찮아서 밑에는 축약형
const user = { // 객체 리터럴
  name: 'tiger',
  age: 27,
}

// Array
// let list = new Array() // 이렇게도 가능 
let list = [10,100,1000,1,2,3] //배열 리터럴

// function
function sum(a , b){//매개변수

  return a + b //값을 뱉는것

}
console.log(sum(1 , 3));//인자
/* 함수는 붕어빵 틀이라고 생각하자!!!! 팥붙과 슈붕을 같은 틀에서 굽는다! 함수 자체는 붕어빵틀 팥과 슈크림은 인자 */

// this
