var job1 = new Promise(function (resolve, reject) {
  resolve("resolved ok!");
});

// promise chaining에 callback 함수로 주어질 파라매터는 promise에서 성공/ 실패 시에 맞춰서 주어져야 한다.
job1.then(function (data) {
  console.log("data", data);
});
