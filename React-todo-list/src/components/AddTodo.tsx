import { useState } from "react";

function AddTodo({ onAddTodo }: { onAddTodo: (text: string) => void }) {
  const [text, setText] = useState("");
  return (
    <>
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            onAddTodo(text);
            setText("");
          }}
        >
          <i className="fas fa-plus"></i> Add
        </button>
      </div>
    </>
  );
}

export default AddTodo;
