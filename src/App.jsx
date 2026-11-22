import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { useState } from "react";
import "./App.css";
function App() {
  const clearAll = () => {
    setTodolist([]);
  };
  const [todolist, setTodolist] = useState([]);
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      isComplete: false,
    };
    setTodolist((prev) => [...prev, newTodo]);
  };
  const toggleTodo = (id) => {
    console.log(id);
    setTodolist((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo,
      ),
    );
  };
  const deleteTodo = (id) => {
    console.log(id);
    setTodolist((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <div className="app">
        <main className="card">
          <Header />
          <TodoForm onAdd={addTodo} />
          <TodoFilters todos={todolist} />
          <TodoList
            todos={todolist}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
          <Footer todos={todolist} onClearAll={clearAll} />
        </main>
      </div>
    </>
  );
}

export default App;
