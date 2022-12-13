/* 
Given a url “https://jsonplaceholder.typicode.com/users", 
1. send a GET request to display all the data on the page in a table. 
2. You may use JSON.stringify() to display the properties with nested objects. 
3. Errors should be handled properly.
4. Do this with fetch and XHR. 
*/

const TableEle = document.getElementById("userInfoTable");

// use fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if(response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Error: Status ${response.status}`)
    }
  })
  .then(data => {
    for (let i = 0; i < data.length; i++) {
     let newRow = document.createElement("tr");
     newRow.setAttribute("id", `userId${i + 1}`);
     newRow.innerHTML = `
      <td>${data[i].id}</td>
      <td>${data[i].name}</td>
      <td>${data[i].username}</td>
      <td>${data[i].email}</td>
      <td>${data[i].phone}</td>
      <td>${data[i].website}</td>
      <td>${JSON.stringify(data[i].address)}</td>
      <td>${JSON.stringify(data[i].company)}</td>
     `;
     TableEle.appendChild(newRow); 
    }
  })
  .catch(error => console.log(error));

// use XHR
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send();
xhr.onload = function () {
  if (xhr.status != 200) {
    throw new Error(`Error: Status ${xhr.status} ${xhr.statusText}`);
  } else {
    const res = JSON.parse(xhr.response);
    for (let i = 0; i < res.length; i++) {
      let newRow = document.createElement("tr");
      newRow.setAttribute("id", `userId${i + 1}`);
      newRow.innerHTML = `
      <td>${res[i].id}</td>
      <td>${res[i].name}</td>
      <td>${res[i].username}</td>
      <td>${res[i].email}</td>
      <td>${res[i].phone}</td>
      <td>${res[i].website}</td>
      <td>${JSON.stringify(res[i].address)}</td>
      <td>${JSON.stringify(res[i].company)}</td>
      `;
      TableEle.appendChild(newRow);
    }
  }
};
xhr.onerror = function () {
  console.log("Request Failed");
};
