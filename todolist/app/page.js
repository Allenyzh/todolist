'use client'

// import { nunito } from "./ui/fonts";

// export default function Page() {
//   return (
//     <div className={`${nunito.className}`}>
//       <h1
//         className="flex items-center justify-center h-32 text-xl text-gray-1000 font-black md:text-3xl md:leading-normal cursor-default"
//       >
//         To-do List
//       </h1>

//       <div className="flex items-center justify-center h-16">
//         <button className="rounded-md flex items-center justify-center w-64 h-10 bg-sky-500 hover:bg-sky-700 text-slate-100 font-black">
//           Add New list
//         </button>
//       </div>
//     </div>
//   );
// }
// components/TodoList.js
import { useState } from 'react'

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'HackerRank Problem solving part 2', completed: true },
    { id: 2, text: 'Join the progress review meeting at 9pm-10', completed: false },
    { id: 3, text: 'Write an article about the "Create Todo App Using Next JS"', completed: true },
    { id: 4, text: 'Create the Monthly presentation 2', completed: false },
  ])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-purple-500 text-white p-4 text-xl">ToDo List</div>
      <div className="p-4">
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded mr-2"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add new task"
          />
          <button onClick={addTask} className="bg-purple-500 text-white p-2 rounded">Add</button>
        </div>
        <ul>
          {tasks.map(task => (
            <li key={task.id} className="flex justify-between items-center mb-2">
              <div onClick={() => toggleTask(task.id)} className="flex-1 cursor-pointer">
                <input type="checkbox" checked={task.completed} onChange={() => {}} className="mr-2" />
                <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
              </div>
              <button onClick={() => removeTask(task.id)} className="text-red-500">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

