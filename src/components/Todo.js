import { useState } from 'react'

const initialState = {
  tasks: '',
  done: false,
}

function Todo() {
  const [task, setTask] = useState([])
  const [newTask, setNewTask] = useState(initialState)

  function handleSubmit(e) {
    e.preventDefault()
    if (newTask.tasks.trim() !== '') {
      setTask([...task, newTask])
      setNewTask(initialState)
    }
  }

  function handleOnChange(e) {
    setNewTask({ ...newTask, [e.target.name]: e.target.value })
    console.log(task)
  }

  function toggleTask(index) {
    const updatedTasks = [...task]
    updatedTasks[index].done = !updatedTasks[index].done
    setTask(updatedTasks)
  }

  function deleteTask(index) {
    const updatedTasks = task.filter((_, i) => i !== index)
    setTask(updatedTasks)
  }

  const totalTasks = task.length
  const completedTasks = task.filter((t) => t.done).length

  function moveTaskUp(index) {
    if (index === 0) return // Prevent moving the first item up
    const updatedTasks = [...task]
    const [movedTask] = updatedTasks.splice(index, 1) // Remove the task from its original position
    updatedTasks.splice(index - 1, 0, movedTask) // Insert the task above its previous position
    setTask(updatedTasks) // Update the task array
  }

  function moveTaskDown(index) {
    if (index === task.length - 1) return // Prevent moving the last item down
    const updatedTasks = [...task]
    const [movedTask] = updatedTasks.splice(index, 1) // Remove the task from its original position
    updatedTasks.splice(index + 1, 0, movedTask) // Insert the task below its previous position
    setTask(updatedTasks) // Update the task array
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSubmit(e) // Trigger the handleSubmit function when Enter is pressed
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ margin: '0px' }}>Todo List</h1>
      <div>
        <input
          style={{ width: '50%', marginTop: '10px' }}
          placeholder="add new task"
          onChange={handleOnChange}
          name="tasks"
          value={newTask.tasks}
          onKeyDown={handleKeyDown}
        ></input>
        <button onClick={handleSubmit}>Add Task</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <p>Total Tasks: {totalTasks}</p>
        <p>Completed Tasks: {completedTasks}</p>
      </div>
      <div>
        <ul>
          {task.map((t, index) => (
            <li
              key={index}
              onClick={() => toggleTask(index)}
              style={{
                cursor: 'pointer',
                textDecoration: t.done ? 'line-through' : 'none',
                color: t.done ? 'gray' : 'black',
              }}
            >
              {t.tasks}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  deleteTask(index)
                }}
                style={{
                  marginLeft: '10px',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation() // Prevent the task from toggling when move up is clicked
                  moveTaskUp(index) // Move the task up
                }}
                style={{
                  marginLeft: '10px',
                  backgroundColor: 'lightblue',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Up
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation() // Prevent the task from toggling when move down is clicked
                  moveTaskDown(index) // Move the task down
                }}
                style={{
                  marginLeft: '10px',
                  backgroundColor: 'lightgreen',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Down
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todo
