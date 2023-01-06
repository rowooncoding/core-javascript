/* eslint-disable no-unused-vars */
/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray

const arr = [10, 100, 1000, 10000];
// // console.log(typeof arr);
// // console.log(Array.isArray(arr));
// //Null을 체크하는 혹은 다른 타입을 정확히 체크하는 유틸함수, data안에 원시타입을 넣으면 됨
// function isNull(data){
//   Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'
// }


/* 요소 순환 -------------------------------------------------------------- */

// forEach
// this[index] : key, item : value
// const user = {}

// arr.forEach(function(item , index){
//   this[index] = item;
// }, user)

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// arr.reverse()
// splice
// 1번째 부터 제거는 하지말고 23과 5를 추가해주세요 0에다가 숫자를 넣으면 거기까지 제거 하고 넣어준다
// arr.splice(1,0,23,5)
// sort
// arr.sort()

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map
let todo = ['밥먹기', '미용실가기', '코딩공부하기'];

let template = todo.map((todoList) => {
  return /* html */ '<li>${todoList}</li>'
})

let newArray = arr.map((item)=> {
  return item * 2;
})

// console.log(newArray);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf

arr.indexOf(100) // 세번째 없는건 -1

// lastIndexOf
// includes

arr.includes(10); // 포함 되어 있으면 true 아니면 false

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]


// find

const find = users.find((item, index) => {
  return item.id < 5
})

// console.log(find);

// findIndex

const findIndex = users.findIndex((item) => {
  return item.id === 3
})

// console.log(findIndex);

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

// let result = arr.filter((number) => {
//   return number > 100;
// })

// console.log(result);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  }
];

// reduce
// 객체 나이의 합을 구해라!, 뒤에 0은 숫자로 바꿔주기 위함!
let age = friends.reduce((acc, cur) => {
  return acc + cur.age;
},0)

// console.log(age);


let template2 = todo.reduce((acc,cur)=>{
  return /* html */ acc + `<li>${cur}의 값</li>`
}, '')

// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = '성찬 보경 일범 세민 형진 주형'

// split
let nameArray = str.split(' ');

console.log(nameArray);

// join
console.log(nameArray.join('/')); 