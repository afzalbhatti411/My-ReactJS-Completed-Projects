import React, { useState } from "react";
import './App.css'

export default function MyExpenseTracker(){

  const [itemName, setItemName] = useState('');
  const [itemCost, setItemCost] = useState('');
  const [list, setList] = useState([])

  const addItem = (e)=>{
    e.preventDefault();
    if(!itemName || !itemCost || isNaN(itemCost)) return;

    const newEntry = {name: itemName, amount: parseFloat(itemCost)};
    setList([...list, newEntry]);

    setItemName('');
    setItemCost('');
  }

  const balance = list.reduce((acc, curr)=> acc + curr.amount, 0);

  const deleteEntery = (indexToDelete)=>{
    const updatedList = list.filter((_, index)=> index !== indexToDelete)
    setList(updatedList);
  }
    
  return(

    <>
    <div className="container">
    <form>
      <h3>Expense Tracker</h3>
      <h2>Balance : {balance} </h2>
      <input type="text" placeholder="Enter Item Name" value={itemName} onChange={(e)=>setItemName(e.target.value)}/>
      <input type="number" placeholder="Enter Item Cost" value={itemCost} onChange={(e)=> setItemCost(e.target.value)} />
      <button className="addBtn" onClick={addItem}>Add Item</button>
      <ul>
        {list.map((entry, index)=>(
          <li key={index}>
            {entry.name} : {entry.amount}
            <button onClick={(e)=>deleteEntery(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </form>
    </div>
    </>
  )

}