import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import "./App.css";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return "dark";
};
const getInitialTodos = () => {
  try {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    return Array.isArray(savedTodos) ? savedTodos : [];
  } catch {
    return [];
  }
};

function App() {
  const [todolist, setTodolist] = useState(getInitialTodos);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todolist));
  }, [todolist]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      isComplete: false,
    };
    setTodolist((prev) => [...prev, newTodo]);
  };
  const toggleTodo = (id) => {
    setTodolist((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo,
      ),
    );
  };
  const deleteTodo = (id) => {
    setTodolist((prev) => prev.filter((todo) => todo.id !== id));
  };
  const updateTodo = (id, newText) => {
    setTodolist((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  };
  const clearAll = () => {
    setTodolist([]);
  };
  return (
    <div className="app">
      <main className="card">
        <Header theme={theme} onThemeChange={setTheme} />
        <TodoForm onAdd={addTodo} />
        <TodoFilters todos={todolist} />
        <TodoList
          todos={todolist}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onUpdate={updateTodo}
        />
        <Footer todos={todolist} onClearAll={clearAll} />
      </main>
    </div>
  );
}

export default App;
