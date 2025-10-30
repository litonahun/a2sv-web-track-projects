interface TodoItem{
    id: number;
    task: string;
    

}

let tasks: TodoItem[] = [];
let nextId = 1;

function addTask(item: string){

    let newItem: TodoItem = {
        id: nextId++,
        task: item
    }
    
    tasks.push(newItem);

    console.log(`New task with id ${newItem.id} added`);

}

function removeTask(id: number){
    let index = tasks.findIndex( item => item.id === id);
    if(index === -1){
        console.log(`Task with id ${id} not found`);
        return;
    }
    tasks.splice(index, 1);
    console.log(`Task with id ${id} removed`);

}

function editTask(id: number, newTask: string){
    let index: number = tasks.findIndex( item => item.id === id);
    
    if(index === -1){
        console.log(`Task with id ${id} not found`);
        return;
    }
    
    tasks[index]!.task = newTask;
    console.log(`Task with id ${id} editted`);

}

function displayTasks(){
    if(tasks.length === 0){
        console.log("No tasks.");
        return
    }

    console.log("Current tasks:");
    tasks.forEach(t => {
        console.log(`${t.id} - ${t.task}`);
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
displayTasks()

