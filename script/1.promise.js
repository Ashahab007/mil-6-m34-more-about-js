const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(
      (response) => response.json() //এখানে promise return করে যা console.log(response.json()) করলে console এ pending অবস্থায় পাওয়া যায়।
    )
    .then((data) => console.log(data)) //এরপর আবার then block এ promise টা পাঠানো হয় যদি ঠিক থাকে তাহলে promise টা return করে।
    .catch((err) => console.log(err)); //আর না ঠিক থাকলে তা catch block এ পাঠানো হয়।
};

loadData();

// ! Creating Promise Manually

const fetchData = () => {
  return new Promise((resolve, reject) => {
    let status = false;
    if (status) {
      resolve("Status resolved.");
    } else {
      reject("Status reject");
    }
  });
};

fetchData()
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); //Status reject

// ! Using Promise.all for fetching multiple API

let urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/comments/1",
  "https://jsonplaceholder.typicode.com/photos/1",
  "https://jsonplaceholder.typicode.com/todos/1",
];

Promise.all(
  urls.map((url) => {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => data);
  })
)
  .then((res) => res)
  .then((data) => console.log(data));
