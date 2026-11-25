import TodoItem from "./TodoItem";
function TodoList({ todos, onToggle, onDelete, onUpdate }) {
  if (todos.length === 0) {
    return <p className="empty">No tasks to show</p>;
  }

  return (
    <ul className="task-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}

export default TodoList;
