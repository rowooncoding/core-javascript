import { getNode } from '../dom/getNode.js'
import { isNumber,isObject } from './typeOf.js'




const first = getNode('.first');



function delay(callback,timeout = 1000){
  setTimeout(callback, timeout);
}


// first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)';
// first.style.top = '0px';

/* 
delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    delay(()=>{
      first.style.top = '0px';
    })
    first.style.transform = 'rotate(360deg)';
  })
})
 */


// delayP()
// .then(()=>{
//   first.style.top = '-100px';
//   return delayP()
// })
// .then(()=>{
//   first.style.transform = 'rotate(360deg)';
//   return delayP()
// })
// .then(()=>{
//   first.style.top = '0px';
// })

function delayP(shouldReject = false, timeout = 1000){

  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      if(!shouldReject){
        resolve('성공!');
      }else{
        reject('실패!');
      }
    }, timeout);
  })
}

delay(true);


// delayP()
// .then(res => console.log(res))
// .catch(err => console.log(err))














