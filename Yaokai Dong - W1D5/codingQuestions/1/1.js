// logic for inital state
let infoList = document.getElementsByClassName("info");

for (let i = 0; i < infoList.length; i++) {
  if (infoList[i].id !== "info-london") {
    infoList[i].hidden = true;
  }
}

// click logic for buttons
let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if(buttons[i].innerHTML === "London") {
      document.getElementById("info-london").hidden = false;
      document.getElementById("info-paris").hidden = true;
      document.getElementById("info-tokyo").hidden = true;
    } else if (buttons[i].innerHTML === "Paris") {
      document.getElementById("info-london").hidden = true;
      document.getElementById("info-paris").hidden = false;
      document.getElementById("info-tokyo").hidden = true;
    } else if (buttons[i].innerHTML === "Tokyo") {
      document.getElementById("info-london").hidden = true;
      document.getElementById("info-paris").hidden = true;
      document.getElementById("info-tokyo").hidden = false;
    }
  });
}
