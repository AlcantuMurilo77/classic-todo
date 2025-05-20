import React, { useState } from 'react'
import './index.css'

function ToDoList() {
  const [tasks, setTasks] = useState<string[]>([""]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

    function addTask() {
    if(newTask.trim() !== ""){
    setTasks(prevTasks => [...prevTasks, newTask]);
    setNewTask("");
    };
  }

  function deleteTask(index: number) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index: number) {
    if(index > 0){
        const updatedTask = [...tasks];

        [updatedTask[index], updatedTask[index - 1]] = 

        [updatedTask[index - 1], updatedTask[index]]

        setTasks(updatedTask);
    }
  }

  function moveTaskDown(index: number) {
    if(index < tasks.length -1){
        const updatedTask = [...tasks];

        [updatedTask[index], updatedTask[index + 1]] = 

        [updatedTask[index + 1], updatedTask[index]]

        setTasks(updatedTask);
    }
    
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-xl p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">To-Do List</h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={addTask}
          >
            Add
          </button>
        </div>

        <ol className="space-y-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg shadow-sm"
            >
              <span className="text-gray-800 font-medium">{task}</span>

              <div className="flex gap-2">
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => moveTaskUp(index)}
                >
                  ↑
                </button>
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => moveTaskDown(index)}
                >
                  ↓
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
