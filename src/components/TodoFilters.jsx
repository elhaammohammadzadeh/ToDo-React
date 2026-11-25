const FILTER_OPTIONS = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

function TodoFilters({ todos, filter, onFilterChange }) {
  const completedCount = todos.filter((todo) => todo.isComplete).length;
  const leftCount = todos.length - completedCount;

  return (
    <div className="toolbar">
      <div className="filters" role="group" aria-label="Filter tasks">
        {FILTER_OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`filter-btn ${filter === option.value ? "active" : ""}`}
            aria-pressed={filter === option.value}
            onClick={() => onFilterChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <span className="tasks-left">{leftCount} tasks left</span>
    </div>
  );
}

export default TodoFilters;
