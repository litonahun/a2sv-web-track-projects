import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

function TodoList({
  todos,
  onDelete,
  onEdit,
  onComplete,
}: {
  todos: Todo[];
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
  onComplete: (id: string) => void;
}) {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo: Todo) => (
          <TodoItem
            item={todo}
            removeTodo={onDelete}
            editTodo={onEdit}
            toggleTodo={onComplete}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
