import TodoItem from "./TodoItem";
function TodoList({ todos, onToggle, onDelete }) {
  // console.log(todos);
  return (
    <ul className="task-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
