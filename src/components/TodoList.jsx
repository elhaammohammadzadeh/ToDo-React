import TodoItem from "./TodoItem";
function TodoList({ todos, onToggle, onDelete, onUpdate }) {
  // console.log(todos);
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
