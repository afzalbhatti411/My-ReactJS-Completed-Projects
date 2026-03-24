import React, { useState } from "react";

function ToDoListApp() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTask([...task, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  };

  const styles = {
    container: { fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '400px', margin: '20px auto', border: '1px solid #ddd', borderRadius: '8px' },
    header: { textAlign: 'center', color: '#333' },
    inputGroup: { display: 'flex', gap: '10px', marginBottom: '20px' },
    input: { flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' },
    addButton: { padding: '8px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' },
    list: { listStyle: 'none', padding: 0 },
    listItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #eee' },
    deleteButton: { backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer' }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>To Do List App</h2>
      
      <div style={styles.inputGroup}>
        <input 
          style={styles.input}
          type="text" 
          placeholder="Enter your task here..." 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
        />
        <button style={styles.addButton} onClick={addTask}>Add Task</button>
      </div>

      <ul style={styles.list}>
        {task.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item}
            <button style={styles.deleteButton} onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoListApp;