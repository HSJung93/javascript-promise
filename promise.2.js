import fetch from "node-fetch";

// console.log(1);
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (myJson) {
//     console.log(myJson);
//   });

// console.log(2);

// nested promise를 promise 체이닝으로
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    // response.json().then(function (data) {
    //   console.log("data", data);
    // });
    return response.json();
  })
  .catch(function (reason) {
    console.log("reason : ", reason);
  })
  .then(function (data) {
    console.log("data", data);
  });
