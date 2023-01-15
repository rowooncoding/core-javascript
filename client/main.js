
import {clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString,addClass,removeClass, showAlert } from './lib/index.js'

import { jujeobData } from "./data/data.js";

const submit = getNode('#submit');
const resultArea = getNode('.result');


function handler(e){
  e.preventDefault();
  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length-1)];
}



submit.addEventListener('click',handler);






































