import { useState } from "react";
import type { Todo } from "../types/todo";

interface TodoItemProps {
  item: Todo;
  removeTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  toggleTodo: (id: string) => void;
}

function TodoItem({ item, removeTodo, editTodo, toggleTodo }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");

  const handleSave = () => {
    if (editText.trim() === "") return;
    editTodo(item.id, editText);
    setIsEditing(false);
    setEditText("");
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center flex-grow-1">
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={item.completed}
          onChange={() => toggleTodo(item.id)}
        />

        {isEditing ? (
          <input
            type="text"
            className="form-control form-control-sm"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
          />
        ) : (
          <span
            style={{
              textDecoration: item.completed ? "line-through" : "none",
            }}
          >
            {item.text}
          </span>
        )}
      </div>

      <div className="btn-group ms-3">
        {isEditing ? (
          <button className="btn btn-success btn-sm" onClick={handleSave}>
            <i className="fas fa-check"></i>
          </button>
        ) : (
          <button
            className="btn btn-warning btn-sm"
            onClick={() => {
              setIsEditing(true);
              setEditText(item.text);
            }}
          >
            <i className="fas fa-edit"></i>
          </button>
        )}

        <button
          className="btn btn-danger btn-sm"
          onClick={() => removeTodo(item.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
