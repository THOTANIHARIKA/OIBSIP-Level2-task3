const addForm = document.getElementById("add-form");
const newTask = document.getElementById("new-task");
const taskDate = document.getElementById("task-date");
const pendingTasksList = document.getElementById("pending-tasks");
const completedTasksList = document.getElementById("completed-tasks");

function createNewTask(taskDescription, taskDate) {
  const newTaskItem = document.createElement("li");
  newTaskItem.classList.add("task-item");

  const taskDescriptionSpan = document.createElement("span");
  taskDescriptionSpan.innerText = taskDescription;
  taskDescriptionSpan.classList.add("task-description");
  newTaskItem.appendChild(taskDescriptionSpan);

  const spaceSpan = document.createElement("span");
  spaceSpan.innerText = ": ";
  newTaskItem.appendChild(spaceSpan);

  const dateSpan = document.createElement("span");
  dateSpan.innerText = taskDate;
  dateSpan.classList.add("task-date");
  newTaskItem.appendChild(dateSpan);

  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.classList.add("complete-button");
  completeButton.addEventListener("click", completeTask);
  newTaskItem.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", deleteTask);
  newTaskItem.appendChild(deleteButton);

  return newTaskItem;
}



function addTask(event) {
  event.preventDefault(); 
  
  if (newTask.value && taskDate.value) { 
    const newTaskItem = createNewTask(taskDate.value, newTask.value);
    pendingTasksList.appendChild(newTaskItem);
    newTask.value = ""; 
    taskDate.value = "";
  }
}

function completeTask(event) {
  const completedTaskItem = event.target.parentElement;
  completedTaskItem.classList.add("task-completed");
  completedTasksList.appendChild(completedTaskItem);
  event.target.remove(); 
}

function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.remove();
}


addForm.addEventListener("submit", addTask);
