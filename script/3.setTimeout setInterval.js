// ! setTimeout
// It will execute the code after specific time

console.log("1");
console.log("2");
console.log("3");

setTimeout(() => {
  console.log("Code executed from setTimeout.");
}, 2000);
console.log("4");
console.log("5");

// ! setInterval
// it will continuously execute the code after a specific interval
let count = 0;

let updateCount = setInterval(() => {
  count++;
  //   To stop the interval use clearInterval() and set the setInterval() in a variable and pass the variable in a clearInterval()
  console.log(count);
  if (count === 6) {
    clearInterval(updateCount);
  }
}, 2000);
