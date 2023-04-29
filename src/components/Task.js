import React from "react";

function Task({ text, category, task, handleDelete }) {
  
  function onDeleteClick() {
    handleDelete(task);
  };
  return (
    <div className="task" >
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDeleteClick}>X</button>
    </div>
  );
}

export default Task;
