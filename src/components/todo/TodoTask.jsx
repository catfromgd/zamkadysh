import React, { useState } from "react";
import styles from "../todo/Todo.module.css";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { LuSaveOff } from "react-icons/lu";

const TodoTask = ({ id, completed, text, toggleTodo, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const editTodo = () => setIsEditing(true);

  const deleteTodo = (id) => {
    setTodos((prevState) => prevState.filter((task) => task.id !== id));
  };

  const cancelEditing = () => {
    setEditText(text);
    setIsEditing(false);
  };

  const saveEditingChanges = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setIsEditing(false);
  };

  return (
    <li className={styles.todoItem}>
      <label className={styles.customCheckbox}>
        <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
        <span className={styles.checkmark}></span>
      </label>

      {!isEditing ? (
        <span className={completed ? styles.completed : styles.active}>
          {text}
        </span>
      ) : (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className={styles.input}
        />
      )}

      <div className={styles.todoControl}>
        {!isEditing ? (
          <>
            <button className={styles.todoEdit} onClick={editTodo}><MdModeEdit /></button>
            <button className={styles.todoDelete} onClick={() => deleteTodo(id)}><MdDelete /></button>
          </>
        ) : (
          <>
            <button className={styles.todoEdit} onClick={saveEditingChanges}><IoIosSave /></button>
            <button className={styles.todoDelete} onClick={cancelEditing}><LuSaveOff /></button>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoTask;