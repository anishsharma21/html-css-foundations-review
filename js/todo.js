const todoInput = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (todoInput.value === "") {
    alert("List item cannot be empty");
  } else {
    const li = document.createElement("li");
    li.innerHTML = todoInput.value;
    listContainer.appendChild(li);
    todoInput.value = "";
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  saveData();
}

listContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveData();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();
