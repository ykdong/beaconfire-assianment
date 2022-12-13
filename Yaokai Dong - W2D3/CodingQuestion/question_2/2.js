/* 
Create a webpage with text input and a search button. 
When you input a user ID and click search, it should display 
all of that user’s information, posts, and todos at the same time 
on the same page in a table. Hint: Promise.all() or Promise.allSettled().
*/

const USER_INFO_URL = "https://jsonplaceholder.typicode.com/users";
const USER_POST_URL = "https://jsonplaceholder.typicode.com/posts?userId";
const USER_TODO_URL = "https://jsonplaceholder.typicode.com/todos?userId";

document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
  const userId = document.getElementById("userInput").value;
  const getUserInfo = fetch(`${USER_INFO_URL}/${userId}`);
  const getUserPost = fetch(`${USER_POST_URL}=${userId}`);
  const getUserToto = fetch(`${USER_TODO_URL}=${userId}`);
  Promise.all([getUserInfo, getUserPost, getUserToto])
    .then(response => {
      if (response[0].ok && response[1].ok && response[2].ok) {
        return response;
      } else {
        throw new Error("User was not found. Please try another user ID");
      }
    })
    .then(result => {
      // table for user info 
      result[0].json().then(data => {
        let tableHead = document.getElementById("userInfoHeader");
        let headerRow = document.createElement("tr");
        headerRow.innerHTML = `
          <th>ID</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Address</th>
          <th>Company</th>
        `;
        let userInfoTable = document.getElementById("userInfoTable");
        let newRow = document.createElement("tr");
        newRow.innerHTML = `
          <td>${data.id}</td>
          <td>${data.name}</td>
          <td>${data.username}</td>
          <td>${data.email}</td>
          <td>${data.phone}</td>
          <td>${data.website}</td>
          <td>${JSON.stringify(data.address)}</td>
          <td>${JSON.stringify(data.company)}</td>
        `;
        tableHead.appendChild(headerRow);
        userInfoTable.appendChild(newRow);
      });

      // table for user post
      result[1].json().then(data => {
        let tableHead = document.getElementById("userPostHeader");
        let userPostTable = document.getElementById("userPostTable");
        let headerRow = document.createElement("tr");
        headerRow.innerHTML = `
          <th>ID</th>
          <th>title</th>
          <th>body</th>
        `;
        tableHead.appendChild(headerRow);
        data.forEach(post => {
          let newRow = document.createElement("tr");
          newRow.innerHTML = `
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
          `;
          userPostTable.appendChild(newRow); 
        })
      })

      // table for user todo
      result[2].json().then(data => {
        let tableHead = document.getElementById("userTodoHeader");
        let userTodoTable = document.getElementById("userTodoTable");
        let headerRow = document.createElement("tr");
        headerRow.innerHTML = `
          <th>ID</th>
          <th>title</th>
          <th>body</th>
        `;
        tableHead.appendChild(headerRow);
        data.forEach(todo => {
          let newRow = document.createElement("tr");
          newRow.innerHTML = `
            <td>${todo.id}</td>
            <td>${todo.title}</td>
            <td>${todo.completed}</td>
          `;
          userTodoTable.appendChild(newRow); 
        })
      })
    })
    .catch(error => {
      let ErrorMessage = document.createElement("h2");
      ErrorMessage.innerText = error;
      document.getElementById("result").appendChild(ErrorMessage)
    })
})
