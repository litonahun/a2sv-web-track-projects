var tasks = [];
var nextId = 1;
function addTask(item) {
    var newItem = {
        id: nextId++,
        task: item
    };
    tasks.push(newItem);
    console.log("New task with id ".concat(newItem.id, " added"));
}
function removeTask(id) {
    var index = tasks.findIndex(function (item) { return item.id === id; });
    if (index === -1) {
        console.log("Task with id ".concat(id, " not found"));
        return;
    }
    tasks.splice(index, 1);
    console.log("Task with id ".concat(id, " removed"));
}
function editTask(id, newTask) {
    var index = tasks.findIndex(function (item) { return item.id === id; });
    if (index === -1) {
        console.log("Task with id ".concat(id, " not found"));
        return;
    }
    tasks[index].task = newTask;
    console.log("Task with id ".concat(id, " editted"));
}
function displayTasks() {
    if (tasks.length === 0) {
        console.log("No tasks.");
        return;
    }
    console.log("Current tasks:");
    tasks.forEach(function (t) {
        console.log("".concat(t.id, " - ").concat(t.task));
    });
}
// for testing purpose
displayTasks();
addTask("Learn TypeScript");
addTask("Build a todo-list");
displayTasks();
removeTask(1);
removeTask(1);
displayTasks();
editTask(2, "Create a todo list");
displayTasks();
