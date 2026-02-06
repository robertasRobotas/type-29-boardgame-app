import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./styles.module.css";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(localData);
  }, []);

  const onAddTask = () => {
    const newTask = {
      id: uuidv4(),
      title: task,
      isCompleted: false,
      creationDate: new Date(),
    };

    const newTasks = [...tasks, newTask];

    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));

    setTask("");
  };

  const onCardClick = (id) => {
    const idx = tasks.findIndex((t) => {
      return t.id === id;
    });

    const tasksModified = [...tasks];

    tasksModified[idx].isCompleted = !tasksModified[idx].isCompleted;

    setTasks([...tasksModified]);
    localStorage.setItem("tasks", JSON.stringify([...tasksModified]));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "3rem" }}>TO DO APP</h1>
      <div className={styles.formWrapper}>
        <input
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          placeholder="task"
          type="text"
        />
        <button onClick={onAddTask}>Add</button>
      </div>
      <div className={styles.tasksWrapper}>
        {tasks.length > 0 ? (
          tasks.map((t) => {
            return (
              <div
                key={t.id}
                className={styles.card}
                onClick={() => onCardClick(t.id)}
              >
                <h3>{t.title}</h3>
                <div
                  className={`${styles.indicator} ${t.isCompleted ? styles.completed : styles.notCompleted}`}
                ></div>
              </div>
            );
          })
        ) : (
          <h5>No tasks yet</h5>
        )}
      </div>
    </div>
  );
};

export default ToDo;
