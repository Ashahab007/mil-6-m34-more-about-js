// ! Run Asynchronous Operation Synchronously using Async/ Await

const loadData = async () => {
  console.log("async/await: আমি প্রথম");
  console.log("async/await: আমি দ্বিতীয়");
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await response.json();
  console.log("async/await: ", data);
  console.log("async/await: আমি তৃতীয়");
};
loadData();

//! Using fetch
const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => console.log("fetch", data));
  console.log("fetch: আমি চতুর্থ");
};

fetchData();

/* 
Note: এখানে async/await এর মাধ্যমে যেকোনো asynchronous operation synchronously করা যায়। যা fetch দিয়ে করা যায় না। see the both result in console.
*/
