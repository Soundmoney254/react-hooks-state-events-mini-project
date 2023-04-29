import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({
    text: "",
    category: categories[1],
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewTask(prevTask => ({
      ...prevTask,
      [name]: value
    }));
  }


  function handleFormSubmit(event) {
    const form = document.querySelector(".new-task-form") 
    event.preventDefault();
    onTaskFormSubmit(newTask);
    setNewTask({
      text: "",
      category: categories[1],
    })
    form.reset()
  };

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleInputChange} />
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={handleInputChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
