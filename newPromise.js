// promise를 return하는 비동기적인 함수를 담은 함수
function job1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // resolve("job1 ok!");
      reject("job2 failed!");
    }, 2000);
  });
}

function job2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("job2 ok!");
    }, 2000);
  });
}

// promise chaining에 callback 함수로 주어질 파라매터는 promise에서 성공/ 실패 시에 맞춰서 주어져야 한다.
// nested 방식
// job1().then(function (data) {
//   console.log("data1", data);
//   job2().then(function (data) {
//     console.log("data2", data);
//   });
// });

// function vs promise
// console.log(job1);
// console.log(job1());
// console.log(job1().then);
// console.log(job1().then());

// promise를 return하는 job2()를 return하는 then()
// then() 안에서 promise를 return하면 promise가 then()의 return 값이 된다.
job1()
  .then(function (data) {
    console.log("data1", data);
    return job2();
  })
  .catch(function (reason) {
    console.log("reason", reason);
    // promise.reject()이면 뒤의 then은 실행이 되지 않는다.
    return Promise.reject(reason);
  })
  .then(function (data) {
    console.log("data2", data);
  });
