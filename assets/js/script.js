var pageContentEl = document.querySelector("#page-content")
var taskIdCounter = 0 ;
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var taskFormHandler = function(event) {
  event.preventDefault();
  // check if input values are empty strings


  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  

  // check if input values are empty strings
if (!taskNameInput || !taskTypeInput) {
  alert("You need to fill out the task form!");
  return false;
}
formEl.reset();


  // package up data as an object
  var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
  };

  // send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
  // create list item
 var createTaskEl = function(taskDataObj) {
  
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // add task id as a custom attribute
  listItemEl.setAttribute("data-task-id", taskIdCounter);

  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  tasksToDoEl.appendChild(listItemEl);

  // increase task counter for next unique id
  taskIdCounter++;
  return actionContainerEl;
}

  var createTaskActions = (taskId) {
  var actionContainerEl = document.createElement("div");
  actionContainerEl.className = "task-actions";
  // create edit button
var editButtonEl = document.createElement("button");
editButtonEl.textContent = "Edit";
editButtonEl.className = "btn edit-btn";
editButtonEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(editButtonEl);

// create delete button
var deleteButtonEl = document.createElement("button");
deleteButtonEl.textContent = "Delete";
deleteButtonEl.className = "btn delete-btn";
deleteButtonEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(deleteButtonEl);

};


formEl.addEventListener("submit", taskFormHandler);
pageContentEl.addEventListener("click", taskButtonHandler);