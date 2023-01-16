
import {clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString,addClass,removeClass, showAlert,copy } from './lib/index.js'

import { jujeobData } from "./data/data.js";

//1. 클릭을 할 대상인 submit의 노드를 가져오기
const submit = getNode('#submit');
//8. 결과 창의 노드를 할당
const resultArea = getNode('.result');




//3. 클릭이벤트르 받을 함수
function clickSubmitHandler(e){
  // 4. 주접떨기 버튼을 누르면 새로고침이 진행되기 때문에 새로고침 방지 
  e.preventDefault();
  // 5. 노드의 값을 가져오는 유틸함수 설정 여기서는 이름이 되겠다
  let name = getInputValue('#nameField');
  // 6. 주접데이터에 이름을 넣어서 실행한 것을 list변수에 할당
  let list = jujeobData(name)
  // 7. 주접데이터에 이름을 넣어서 실행한 것을 랜덤하게 돌림. 단, 배열을 0부터 시작해야 하기 때문에 -1을 해줬음 
  let pick = list[getRandom(list.length-1)];

  // validaiton
  // 만약에 이름을 안넣었을 경우 경고창이 뜨고 2초있다가 사라짐(함수의 리턴은 break와 같다)
  if(!name){
    console.log('이름을 입력해 주세요!');
    showAlert('.alert-error','잘못된 정보입니다.!',2000);
    return 
  }
  // 숫자가 들어간 이름일 경우에 뜨는 것
  if(isNumericString(name)){
    console.log('제대로된 이름을 입력해주세요.');
    showAlert('.alert-error','잘못된 이름입니다.!',2000);
    return
  }

  // 결과창을 깨끗하게 지움
  clearContents(resultArea)
  // resultArea에 변수 pick을 박는다
  insertLast(resultArea,pick)
  
}
//클립보드 복사 코드
function clickCopyHandler(e){
  let text = resultArea.textContent;
  // promise 구문! 확실히 되면 promise를 뱉을게! 그러고 나서 ... 할게!!!
  copy(text).then(()=>{
    showAlert('.alert-success','클립보드 복사가 완료됐습니다.',2000);
  })
  // 다음 해야할일
  // showAlert('.alert-success','클립보드 복사가 완료됐습니다.',2000);
  // 그런데 만약 복사 실패가 되어도 복사가 됐다고 뜸!
  // 그걸 확실하게 '약속' 해줄게!!!! -> promise ; copy.js. 참조
}

//2. submit에 클릭 이벤트 삽입
submit.addEventListener('click',clickSubmitHandler)
resultArea.addEventListener('clikc',clickCopyHandler)








































