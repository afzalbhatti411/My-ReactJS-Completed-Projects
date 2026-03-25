import React, { useState } from "react";

function ToDoListApp(){

  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = ()=>{
    if(inputText !== ""){
      setTaskList([...taskList, inputText]);
      setInputText('')
    }
  }

  const deleteTask = (index)=>{
    const updatedTask = taskList.filter((_, i) => i !==index);
    setTaskList(updatedTask);
  }

  const styles = {
    container: {
      backgroundColor: "pink",
      maxWidth: "400px",
      padding: "10px",
      border: "1px solid",
      borderRadius: "20px",
      boxShadow: "0 4px 10px rgba(10, 184, 94, 0.6)",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    title: {
      fontSize: "30px",
      padding: "10px",
      marginTop: "10px"
    },
    inputDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      marginBottom: "20px",
      padding: "10px" 
    },
    input:{
      border: "1px solid",
      borderRadius: "5px",
      fontSize: "15px",
    },
    button: {

      border: "2px solid",
      borderRadius: "5px"
    },
    list: {
      textAlign: "center",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "5px",
      marginBotton: "10px",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      padding: "8px",
      border: "1px, solid",
      borderRadius: "8px"
    }


  }
  return(
    <div style={styles.container}>
      <h2 style={styles.title}> To Do List App </h2>
      <div style={styles.inputDiv}>
      <input style={styles.input} type="text" placeholder="Enter your Task here..." value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
      <button style={styles.button} onClick={addTask}> Add Task </button>
      </div>
      <ul>
        {taskList.map((item, index)=>
        <li style={styles.list} key={index}>{item}
        <button onClick={()=>deleteTask(index)}>Delete</button>
        </li>
        )}
      </ul>
      
    </div>
  )
}

export default ToDoListApp;
