const URL = "http://localhost:3000/todo/1"

// event listener for create new todo item
document.getElementById("form").addEventListener('submit', (e) => {
  e.preventDefault();
  // get all the necessary information from user input
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const status = document.getElementById("status").value;
  const priority = document.getElementById("priority").value;
  const userInput = {
    title,
    description,
    status,
    priority
  };
  // make API call to the server
  fetch(URL, {
    method: "POST",
    headers: {'Content-type': "application/json"},
    body: JSON.stringify(userInput)
  }).then(response => {
    // after creating new item, show the updated list to user
    if (response.ok) { window.location.reload(); };
  });
});

const itemTable = document.getElementById("itemContainer");
itemTable && itemTable.addEventListener("click", (e) => {
  // event listener for delete a todo item
  if (e.target.innerText === "Delete") {
    const itemIndex = e.target.value;
    const itemTitle = document.getElementById(`title${itemIndex}`).innerText;
    fetch(URL, {
      method: "DELETE",
      headers: {'Content-type': "application/json"},
      body: JSON.stringify({title: itemTitle})
    }).then(response => {
      if (response.ok) { window.location.reload(); };
    });

  // event listener for modify a todo item
  } else if (e.target.innerText === "Edit") {
    e.target.innerText = "Save";
    const index = e.target.value;
    const targetRow = document.getElementById(`row${index}`);
    const newRow = document.createElement("tr");

    // create new row for user input
    newRow.innerHTML = `
      <td>${String(parseInt(index) + 1)}</td>
      <td><input type="text" id=title${index} required></input></td>
      <td><input type="text" id=description${index} required></input></td>
      <td>
        <select id=status${index} required>
          <option value=""></option>
          <option value="completed">Completed</option>
          <option value="inProgress">In progress</option>
        </select>
      </td>
      <td>
        <select id=priority${index} required>
          <option value=""></option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </td>
      <td>${targetRow.children[5].innerText}</td>
      <td><button value=${index}>Delete</button></td>
      <td><button value=${index}>Save</button></td>
    `;
    newRow.setAttribute("id", `row${index}`)
    
    // replace target row with new row to gather user input
    targetRow.parentNode.replaceChild(newRow, targetRow);

  } else if (e.target.innerText === "Save") {
    // event listener for the save button when finish editing
    const index = e.target.value;
    const newTitle = document.getElementById(`title${index}`).value;
    const newDescription = document.getElementById(`description${index}`).value;
    const newStatus = document.getElementById(`status${index}`).value;
    const newPriority = document.getElementById(`priority${index}`).value;
    const userInput = {
      itemIndex: index,
      newTitle,
      newDescription,
      newStatus,
      newPriority
    }; 
    fetch(URL, {
      method: "PUT",
      headers: {'Content-type': "application/json"},
      body: JSON.stringify(userInput)
    }).then(response => {
      // show the updated list to user after modify certain item
      if (response.ok) { window.location.reload(); };
    });
  }
});
