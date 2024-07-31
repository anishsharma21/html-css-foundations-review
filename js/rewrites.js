const addButton = document.querySelector(".add button");
const todoInput = document.querySelector(".add input");
const todoUList = document.querySelector(".todo-list");

addButton.addEventListener("click", () => {
  if (todoInput.value !== "") {
    const todoItemHTML = `
      <li>
        <img src="../img/todo/unchecked.png" alt="unchecked item img" height="24px" />
        ${todoInput.value}
        <span class="remove">X</span>
      </li>
    `;
    todoUList.insertAdjacentHTML("beforeend", todoItemHTML);
    todoInput.value = "";
  }
});
