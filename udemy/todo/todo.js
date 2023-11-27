const newTask = document.querySelector(".input-todo");
const newAddTask = document.querySelector(".btn-todo-add");
const itemList = document.querySelector(".todo-list");

newAddTask.addEventListener("click", addTask);
itemList.addEventListener("click", deleteTask);
document.addEventListener("DOMContentLoaded", readLocalStorage);

function deleteTask(e) {
  const clickedElement = e.target;

  if (clickedElement.classList.contains("todo-btn-done")) {
    clickedElement.parentElement.classList.toggle("todo-done");
  }
  if (clickedElement.classList.contains("todo-btn-delete")) {
    if (confirm("Are you sure?")) {
      clickedElement.parentElement.classList.toggle("losted-item");
      const willbedeletedTask =
        clickedElement.parentElement.children[0].innerText;

      deleteLocalStorage(willbedeletedTask);
      clickedElement.parentElement.addEventListener(
        "transitionend",
        function () {
          clickedElement.parentElement.remove();
        }
      );
    }
  }
}

function addTask(e) {
  e.preventDefault();

  if (newTask.value.length > 0) {
    createToDoItem(newTask.value);
    //deyeri elave etdikden sonra ekranda yazilani silsin
    //local Storage-e elave etmek
    saveLocalStorage(newTask.value);
    newTask.value = "";
  } else {
    alert("Please fill the gap!");
  }
}

function localeStorageToArray() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  return tasks;
}
function saveLocalStorage(newTask) {
  let tasks = localeStorageToArray();

  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


function readLocalStorage() {
  const tasks = localeStorageToArray();

  /*
  tasks.foreach(function (task) {
    createToDoItem(task);
  });*/
  tasks?.map((task) => createToDoItem(task));
}

function createToDoItem(task) {
  console.log(task)
  //create div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-item");

  //create li
  const todoLi = document.createElement("li");
  todoLi.classList.add("todo-li");
  todoLi.innerText = task;
  todoDiv.appendChild(todoLi);

  //done buttonu elave et
  const doneTaskBtn = document.createElement("button");
  doneTaskBtn.classList.add("todo-btn");
  doneTaskBtn.classList.add("todo-btn-done");
  doneTaskBtn.innerHTML =
    '<i class="fa fa-check-square" aria-hidden="true"></i>';
  todoDiv.appendChild(doneTaskBtn);

  //delete buttonu elave et
  const dltTaskBtn = document.createElement("button");
  dltTaskBtn.classList.add("todo-btn");
  dltTaskBtn.classList.add("todo-btn-delete");
  dltTaskBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  todoDiv.appendChild(dltTaskBtn);

  //ul-e yaradilan div-in elave edilmesi
  itemList.appendChild(todoDiv);
}

function deleteLocalStorage(task) {
  let tasks = localeStorageToArray();

  //splice ile item silmek
  const deletedItemIndex = tasks.indexOf(task);
  console.log(deletedItemIndex);
  tasks.splice(deletedItemIndex, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
