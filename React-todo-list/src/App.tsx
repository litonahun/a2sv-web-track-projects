import { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/todo";
import "./styles/App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newText: string) => {
    if (newText !== "") {
      const new_item: Todo = {
        id: crypto.randomUUID(),
        text: newText,
        completed: false,
      };
      setTodos((todos) => [...todos, new_item]);
    }
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (id: string, newText: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const handleToggleComplete = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <div className="app-background d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card shadow-lg p-4"
          style={{ width: "400px", maxWidth: "90%" }}
        >
          <h1 className="text-center mb-4">
            <i className="fas fa-clipboard-list me-2"></i>
            My To-do List
          </h1>
          <AddTodo onAddTodo={handleAddTodo} />
          <TodoList
            todos={todos}
            onDelete={handleDeleteTodo}
            onEdit={handleEditTodo}
            onComplete={handleToggleComplete}
          />
        </div>
      </div>
    </>
  );
}

export default App;
