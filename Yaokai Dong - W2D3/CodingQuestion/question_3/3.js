const USER_BASE_URL = "https://jsonplaceholder.typicode.com/users";

function delayedRequest(url) {
  fetch(url)
  .then(data => {
    return data.json()
  })
  .then(data => {
    console.log(`Start process at: ${new Date().getSeconds()}s`);
    setTimeout(() => {
      console.log(data);
      console.log(`Finish process at: ${new Date().getSeconds()}s`);
    }, 2000)
  })
}

const USER_ID_1 = 1;
const USER_ID_2 = 2;
const USER_ID_3 = 3;
const USER_ID_4 = 4;
const USER_ID_5 = 5;
delayedRequest(`${USER_BASE_URL}/${USER_ID_4}`);