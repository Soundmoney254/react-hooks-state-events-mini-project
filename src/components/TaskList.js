import React, { useState, useEffect } from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

function TaskList({ tasks }) {
  const [tasksWithId, setTasksWithId] = useState([]);

  useEffect(() => {
    const tasksWithId = tasks.map(task => ({ ...task, id: uuidv4() }));
    setTasksWithId(tasksWithId);
  }, [tasks]);

  function handleDelete(deletedTask) {
    const updatedTasks = tasksWithId.filter(task => task.id !== deletedTask.id);
    setTasksWithId(updatedTasks);
  }

  const arrayOfTasks = tasksWithId.map(task => (
    <Task
      key={task.id}
      text={task.text}
      category={task.category}
      task={task}
      handleDelete={handleDelete}
    />
  ));

  return (
    <div className="tasks">
      {arrayOfTasks}
    </div>
  );
}

export default TaskList;
