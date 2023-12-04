const todoList = document.getElementById("todo-container");
const addTodo = document.getElementById("add-button");
const inputFieldText = document.getElementById("text-field");
let currentLength = 0;

function deleteTodo(id) {
    const element = document.getElementById(id);
    todoList.removeChild(element);
}

function addTodoFn() {
    const currentElements = currentLength;
    const newTodo = document.createElement("div");
    newTodo.classList.add("todo");
    newTodo.id = currentElements + 1;
    currentLength += 1;
    const p = document.createElement("p");

    if (inputFieldText.value ? .length < 1) {
        return;
    }
    p.innerText = inputFieldText.value;
    const checkButton = document.createElement("input");
    checkButton.type = "checkbox";
    checkButton.onchange = () => {
        if (checkButton.checked) {
            newTodo.classList.add("checked-todo");
        } else {
            newTodo.classList.remove("checked-todo");
        }
    };
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.className = "delete";
    deleteButton.onclick = () => deleteTodo(currentElements + 1);
    newTodo.appendChild(checkButton);
    newTodo.appendChild(p);
    newTodo.appendChild(deleteButton);
    todoList.appendChild(newTodo);
    inputFieldText.value = "";
}

inputFieldText.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        addTodoFn();
    }
});

addTodo.addEventListener("click", addTodoFn);