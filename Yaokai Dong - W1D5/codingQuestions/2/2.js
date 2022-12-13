// logic for add new record
document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();
  // get user input
  let name = document.getElementById("name").value;
  let category = document.getElementById("category").value;
  let price = document.getElementById("price").value;

  // get current record length
  let rowId = document.getElementsByTagName("tr").length;

  // create new element based on user input
  let nameElement = document.createElement("td");
  nameElement.innerHTML = name;
  let categoryElement = document.createElement("td");
  categoryElement.innerHTML = category;
  let priceElement = document.createElement("td");
  priceElement.innerHTML = `$${price}`;
  let button = document.createElement("button")
  button.innerHTML = "Delete";
  // set button with attribute for later delete logic
  button.setAttribute("value", `row${rowId}`)
  let buttonElement = document.createElement("td");
  buttonElement.appendChild(button);

  // create new record and insert user input
  let newRow = document.createElement("tr");
  newRow.append(nameElement, categoryElement, priceElement, buttonElement);

  // set new row with attribute for later delete logic
  newRow.setAttribute("id", `row${rowId}`);

  // append new record into DOM
  document.getElementById("listBody").appendChild(newRow);

  // reset input box
  document.getElementById('name').value = '';
  document.getElementById('category').value = '';
  document.getElementById('price').value = '';
});

// logic for delete record
document.getElementById("listBody").addEventListener("click", function(e) {
  document.getElementById(e.target.value).remove();
})