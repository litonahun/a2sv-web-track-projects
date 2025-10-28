let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-btn");
let taskList = document.getElementById("task-list");

addButton.addEventListener("click", addTask)

function addTask(){
    if (!taskInput.value) {
        return;
    }
    let listItem = document.createElement("li");
    listItem.addEventListener("click", remove => listItem.remove());
    listItem.appendChild(document.createTextNode(taskInput.value));
    taskList.appendChild(listItem);

    taskInput.value = "";
}