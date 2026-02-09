import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./styles.module.css";
import TaskCard from "./Card/Card";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(localData);
  }, []);

  useEffect(() => {
    console.log("111111");
  });

  useEffect(() => {
    console.log("222222");
  }, []);

  useEffect(() => {
    console.log("333333");
  }, [tasks]);

  useEffect(() => {
    console.log("444444");
  }, [tasks, task]);

  useEffect(() => {
    if (task.length < 3 && task.length !== 0) {
      setError("Min length 3");
    } else {
      setError("");
    }
  }, [task]);

  const onAddTask = () => {
    if (!task) {
      setError("Input is empty");
      return;
    }

    setError("");

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

  // const onCardClick = (id) => {
  //   const idx = tasks.findIndex((t) => {
  //     return t.id === id;
  //   });

  //   const tasksModified = [...tasks];

  //   tasksModified[idx].isCompleted = !tasksModified[idx].isCompleted;

  //   setTasks([...tasksModified]);
  //   localStorage.setItem("tasks", JSON.stringify([...tasksModified]));
  // };

  const onCardClick = (id) => {
    const filteredData = tasks.filter((t) => {
      return id !== t.id;
    });

    setTasks(filteredData);
    localStorage.setItem("tasks", JSON.stringify(filteredData));
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
        {error && <p className={styles.error}>{error}</p>}
      </div>
      <div className={styles.tasksWrapper}>
        {tasks.length > 0 ? (
          tasks.map((t) => {
            return (
              <TaskCard
                key={t.id}
                id={t.id}
                title={t.title}
                isCompleted={t.isCompleted}
                onCardClick={onCardClick}
              />
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
