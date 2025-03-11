// ! Run Asynchronous Operation Synchronously using Async/ Await

const loadData = async () => {
  console.log("async/await: আমি প্রথম");
  console.log("async/await: আমি দ্বিতীয়");
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await response.json();
  console.log("async/await: আমি তৃতীয়", data);
  console.log("async/await: আমি চতুর্থ");
};
loadData();

//! Using fetch
const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => console.log("fetch: আমি প্রথম", data));
  console.log("fetch: আমি দ্বিতীয় ");
};

fetchData();

/* 
Note: এখানে async/await এর মাধ্যমে যেকোনো asynchronous operation synchronously করা যায়। যা fetch দিয়ে করা যায় না। see the both result in console.
*/

// Exercise:
const orderFood = async () => {
  const food = await cookFood();
  console.log("Food is ready");
  console.log(food);
};

function cookFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Food is delicious");
    }, 3000);
  });
}
orderFood();
