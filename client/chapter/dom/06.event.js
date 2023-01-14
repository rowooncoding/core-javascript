/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

const first = getNode('.first');
const second = getNode('.second');
const ground = getNode('.ground');
const ball = getNode('.ball');


function handler(){
  console.log('hit !');

  // css('.second','display','none')


}

first.addEventListener('click', handler);



// const off = bindEvent('.first','click',handler);

// bindEvent('.second','click',off);

ground.addEventListener('click',function(e){
  console.log(e.offsetX,e.offsetY);

  ball.style.transform = `translate(${e.offsetX}px, ${e.offsetY}px)`;
})


// second.addEventListener('click',function(){
//   first.removeEventListener('click', handler);
// })


function handlerTrue (e) {
  console.log(e.offsetX, e.offsetY);
  ball.style.transform = `translate(${e.offsetX}px`,`${e.offsetY}px)`;
}

ground.addEventListener("mousemove", debounce(handlerTrue) );


function debounce(callback, limit = 2000) {
  let timeout;
  return function (...args) {
    console.log(args);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}


function throttle(callback, limit = 1000) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}



















// - addEventListener
// - removeEventListener