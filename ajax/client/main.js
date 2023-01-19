

import { 
  insertLast,
  tiger,
  delayP
 } from "./lib/index.js";



// rendingUserList 함수 만들기 
// ajax (tiger) get user List


// 유저 카드 생성
// 생성된 카드로 랜더링 

async function rendingUserList(){
  
  let response = await tiger.get('https://jsonplaceholder.typicode.com/users/1')
  
  let userData = response.data;

  console.log(userData);


}



rendingUserList();










