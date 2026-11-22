function TodoFilters({ todos }) {
  const completedCount = todos.filter((todo) => todo.isComplete).length;
  const leftCount = todos.length - completedCount;

  return (
    <div className="toolbar">
      <div className="filters">
        <button className="filter-btn active">All</button> …
      </div>
      <span className="tasks-left">{leftCount} tasks left</span>
    </div>
  );
}

export default TodoFilters;
