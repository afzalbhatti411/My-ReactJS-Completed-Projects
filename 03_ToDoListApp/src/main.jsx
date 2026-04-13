import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDoListApp from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoListApp />
  </StrictMode>,
)
