import { typeError } from "../error.js";

export function disalbeElement(node){
  if(node.nodeType !== document.ELEMENT_NODE){
    typeError('이 함수의 인자는 dom 요소 노드이어야 합니다')
  }
  node.disabled = true;
}

export function enalbeElement(node){
  if(node.nodeType !== document.ELEMENT_NODE){
    typeError('이 함수의 인자는 dom 요소 노드이어야 합니다')
  }
  node.disabled = false;
}