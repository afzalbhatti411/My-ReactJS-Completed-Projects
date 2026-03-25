import React, { useState } from "react";

function ToDoListApp(){
  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = ()=>{
    if(inputText.trim() !== ""){
      setTaskList([...taskList, inputText]);
      setInputText('');
    }
  }

  const deleteTask = (index)=>{
    const updatedTask = taskList.filter((_, i)=> i !== index);
    setTaskList(updatedTask);
  }
  const styles = {
    container: {
      backgroundColor: "pink",
      margin: "50px auto",
      maxWidth: "300px",
      textAlign: "center",
      padding: "5px",
      border: "1px solid",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(50, 44, 39, 0.9)"
    },
    inputGroup: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px"
    },
    input: {
      flex: 1, 
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc"
    },
    addButton: {
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "5px",
      padding: "10px 15px",
      cursor: "pointer"
    },
    list: {
      listStyle: "none",
      padding:0
    },

    listItems: {
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "10px",
      borderBottom: "1px solid #ddd"    }


  }
  return(
    <div style={styles.container}>
      <h2>TO DO LIST APP</h2>
      <div style={styles.inputGroup}>
      <input style={styles.input} type="text" placeholder="Enter your Task here..." value={inputText} onChange={(e)=> setInputText(e.target.value)}/>
      <button style={styles.addButton} onClick={addTask}>Add Task </button>
      </div>
      <ul style={styles.list}>
        {taskList.map((item, index)=> 
        <li style={styles.listItems} key={index}>{item}
        <button onClick={()=>deleteTask(index)}>Delete</button>
        </li>
        )}
      </ul>
      

    </div>
  )
}
export default ToDoListApp;
