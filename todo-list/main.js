const inputTodoButton = document.querySelector(".inputTodo");
// console.log("inputTodoButton:", inputTodoButton);

inputTodoButton.addEventListener("click", function () {
  const input = document.querySelector("input");
  const newTask = document.createElement("li");
  //   newTask.innerHTML = input.value;
  //   todoList.appendChild(newTask);
  todoList.innerHTML += `<li class="list-item">${input.value}</li>`;
  input.value = "";
});

console.clear();

const thatDiv = document.querySelector("div");
console.log("thatDiv:", thatDiv);
thatDiv.classList.add("bananas");
// thatDiv.classList.remove("bananas");
