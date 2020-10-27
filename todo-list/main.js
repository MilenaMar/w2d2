const input = document.querySelector("input");
const button = document.querySelector("button");
const todoList = document.querySelector(".todo-list");

button.addEventListener("click", () => {
  if (input.value.trim().length === 0) {
    return;
  }
  const task = input.value;
  const newTask = document.createElement("li");
  newTask.innerText = task;
  newTask.onclick = clickHandler;
  todoList.appendChild(newTask);
  input.value = "";
});

function clickHandler(event) {
  console.log("event:", event);
  console.log(event.target.innerText);
  event.target.style.textDecoration = "line-through";
}

const allListItems = document.querySelectorAll("li");
console.log("allListItems:", allListItems);
allListItems.forEach((li) => {
  console.log("EXECUTED");
  li.addEventListener("click", clickHandler);
});

// click the button
// eventListener "click"
// add task to list
// saving the value of the input and adding to the list
// clear input
// input.value = ""
