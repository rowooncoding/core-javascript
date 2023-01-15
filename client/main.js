
import {clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString,addClass,removeClass, showAlert } from './lib/index.js'

import { jujeobData } from "./data/data.js";

const submit = getNode('#submit');
const resultArea = getNode('.result');


function handler(e){
  e.preventDefault();
  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length-1)];

  if(!name){
    showAlert('.alert-error','잘못된 이름입니다!',2000);
    return
  }
  if(isNumericString){
    showAlert('alert.error','이름을 정확히 입력해 주세요!',2000)
    return
  }

  clearContents(resultArea);
  insertLast(resultArea,pick);
}



submit.addEventListener('click',handler);






































