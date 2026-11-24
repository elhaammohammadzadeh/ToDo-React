import { Pencil, Trash2, X, Check } from "lucide-react";
import { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const startEditing = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const saveEditing = () => {
    const trimmedText = editText.trim();

    if (!trimmedText) return;

    onUpdate(todo.id, trimmedText);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveEditing();
    }

    if (e.key === "Escape") {
      cancelEditing();
    }
  };

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

      {isEditing ? (
        <input
          className="edit-input"
          autoFocus
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <span className="task-text">{todo.text}</span>
      )}

      <div className="task-actions">
        {isEditing ? (
          <>
            <button
              className="icon-btn edit"
              onClick={saveEditing}
              title="Save task"
              type="button"
            >
              <Check />
            </button>

            <button
              className="icon-btn edit"
              onClick={cancelEditing}
              title="Cancel editing"
              type="button"
            >
              <X />
            </button>
          </>
        ) : (
          <>
            <button
              className="icon-btn edit"
              onClick={startEditing}
              title="Edit task"
              type="button"
            >
              <Pencil />
            </button>

            <button
              className="icon-btn delete"
              onClick={() => onDelete(todo.id)}
              title="Delete task"
              type="button"
            >
              <Trash2 />
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
