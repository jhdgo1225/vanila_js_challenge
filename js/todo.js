const toDo = document.querySelector(".todo-list");
const toDoForm = document.querySelector(".todo-list__form");
const toDoInput = document.querySelector(".todo-list__form input");
const toDoList = document.querySelector(".todo-list__list");
const openToDoBtn = document.querySelector(".btn-for-visible button");

const WAIT_FOR = "wait-right";
let toDos = [];
let open = false;

const TODOS_KEY = "todos";

function slideToDo() {
  if (!open) {
    open = true;
    openToDoBtn.innerHTML = '<i class="far fa-times-circle fa-3x"></i>';
    openToDoBtn.parentElement.classList.remove(WAIT_FOR);
    toDo.classList.remove(WAIT_FOR);
  } else {
    open = false;
    openToDoBtn.innerHTML =
      '<i class="far fa-arrow-alt-circle-left fa-3x"></i>';
    openToDoBtn.parentElement.classList.add(WAIT_FOR);
    toDo.classList.add(WAIT_FOR);
  }
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  span.style.marginRight = "20px";
  const button = document.createElement("button");
  button.innerText = "X";
  button.style.cursor = "pointer";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
openToDoBtn.addEventListener("click", slideToDo);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
