import { useRef } from "react";
import { CirclePlus } from "lucide-react";

function TodoForm({ onAdd }) {
  const inputRef = useRef();

  const add = (e) => {
    e.preventDefault;
    const inputText = inputRef.current.value.trim();
    if (!inputText) return;
    onAdd(inputText);
    inputRef.current.value = "";
  };

  return (
    <form
      onSubmit={() => {
        add();
      }}
      className="add-form"
    >
      <div className="input-wrap">
        <span className="input-icon">
          <CirclePlus size={20} />
        </span>
        <input type="text" ref={inputRef} className="task-input" />
      </div>
      <button type="submit" className="btn-primary">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
