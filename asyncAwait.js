// promise 체이닝을 async await으로

import { time } from "console";

function timer(time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}
/*
console.log("start");
timer(1000)
  .then(function (time) {
    console.log("time : " + time);
    return timer(time + 1000);
  })
  .then(function (time) {
    console.log("time : " + time);
    return timer(time + 1000);
  })
  .then(function (time) {
    console.log("time : ", time);
    console.log("end");
  });
*/
async function run() {
  console.log("start");
  // await은 then 안의 파라매터의 첫번째 값을 받는다.
  var time = await timer(1000);
  console.log("time : " + time);
  time = await timer(time + 1000);
  console.log("time : " + time);
  time = await timer(time + 1000);
  console.log("time : " + time);
  console.log("end");
  return time;
}
async function parentRun() {
  console.log("parent start");
  var time = await run();
  console.log("delivered time : " + time);
  console.log("parent end");
  //   console.log(run());
}
console.log("grand parent start");
parentRun().then(function () {
  console.log("grand parent end");
});

// async 함수는 자동으로 promise를 리턴한다
// 명시적으로 리턴하면 값을 전달한다.
