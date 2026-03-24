import React, { useState } from "react";

function ToDoListApp(){

  const [taskList, setTaskList] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTask = ()=>{
    if(inputText.trim() !== ""){
      setTaskList([...taskList, inputText]);
      setInputText('')
    }
  }
  const deleteTask = (index)=>{
    const updatedTask = taskList.filter((item, i)=> i !== index);
    setTaskList(updatedTask);

  }
  return(
    <div>
      <h2>To Do List App </h2>
      <input type="text" placeholder="Enter your task here..." value={inputText} onChange={(e)=> setInputText(e.target.value)} />
      <button onClick={addTask}> Add Task </button>
      <ul>
        {taskList.map((item, index)=>
        <li key={index}>{item}
        <button onClick={()=>deleteTask(index)}>Delete</button>
        </li>
        )}
      </ul>

    </div>
  )
}

export default ToDoListApp;
