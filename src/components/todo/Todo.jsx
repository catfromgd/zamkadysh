import React, { useState, useEffect } from "react";
import styles from "../todo/Todo.module.css"
import { v4 as uuidv4 } from "uuid";
import TodoTask from "./TodoTask";

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setTodos((prev) => [...prev, { id: uuidv4(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTodo = (id) => {
    setTodos((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TODO</h1>
      <input
        type="text"
        className={styles.input}
        placeholder="Create a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleAddTodo}
      />
      <ul className={styles.todoList}>
        {filteredTodos.map((todo) => (
          <TodoTask key={todo.id} {...todo} toggleTodo={toggleTodo} id={todo.id} setTodos={setTodos} />
        ))}
      </ul>
      <div className={styles.footer}>
        <span>{todos.filter((todo) => !todo.completed).length} items left</span>
        <div className={styles.filters}>
          <button className={filter === "all" ? styles.active : ""} onClick={() => setFilter("all")}>All</button>
          <button className={filter === "active" ? styles.active : ""} onClick={() => setFilter("active")}>Active</button>
          <button className={filter === "completed" ? styles.active : ""} onClick={() => setFilter("completed")}>Completed</button>
        </div>
        <button className={styles.clear} onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default Todo;