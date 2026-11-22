import { Pencil, Trash2 } from "lucide-react";
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`task-item ${todo.isComplete ? "completed" : ""}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          checked={todo.isComplete}
          onChange={() => onToggle(todo.id)}
        />
        <span className="checkmark"></span>
      </label>
      <span className="task-text">{todo.text}</span>
      <div className="task-actions">
        <button className="icon-btn edit">
          <Pencil />
        </button>
        <button className="icon-btn delete" onClick={() => onDelete(todo.id)}>
          <Trash2 />
        </button>
      </div>
    </li>
  );
}
export default TodoItem;
