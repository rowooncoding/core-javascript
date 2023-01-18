
import { getNode } from '../dom/getNode.js'



const first = getNode('.first');



function delay(callback,timeout = 1000){
  setTimeout(callback, timeout);
}


// first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)';
// first.style.top = '0px';


delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    delay(()=>{
      first.style.top = '0px';
    })
    first.style.transform = 'rotate(360deg)';
  })
})

function delayP(timeout = 1000){

  return new Promise((resolve,reject)=> {
    setTimeout(()=>{
      resolve('성공!');
      // reject('실패!');
    },timeout);
  })
}
console.log(delayP());

















