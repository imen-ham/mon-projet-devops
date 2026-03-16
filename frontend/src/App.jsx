import React, { useEffect, useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(() => setTasks([
        { id: 1, title: 'Faire le TP DevOps', done: false },
        { id: 2, title: 'Pousser sur GitHub', done: false }
      ]))
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '40px auto' }}>
      <h1>Todo App</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App