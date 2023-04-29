import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 } from 'uuid';

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ TASKS });

const importedTasks = TASKS
function App() {

  const [TASKS, setTasksList] = useState(importedTasks);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  

  useEffect(() => {
    setCategories(CATEGORIES);
  }, []);

  function onTaskFormSubmit(addNewTask){
    const newTask = ({ ...addNewTask, id: v4() })
    const updatedTasks = [newTask, ...TASKS]
    setTasksList(updatedTasks);
  }

  function handleCategoryClick(category) {
    setSelectedCategory(category);

    // Filter tasks based on selected category
    const filteredTasks = category === "All"
      ? TASKS
      : TASKS.filter(task => task.category === category);

    setTasksList(filteredTasks);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryClick={handleCategoryClick}
      />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} 
      categories={categories} />
      <TaskList 
        tasks={TASKS} />
    </div>
  );
}

export default App;
