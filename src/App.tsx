// App.tsx
import React, { useState, useEffect } from 'react';
import TaskList from './TaskList.tsx';
import TaskForm from './TaskForm.tsx';
import Task from './Task.ts';
import { fetchTasks, DeleteTask, UpdateTask } from './api.ts'; // Import fetchTasks

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks().then(fetchedTasks => {
      setTasks(fetchedTasks);
    });
  }, []);

  const DeleteTaskApi = (id: number) => {
    //console.log("delete task " + id);
    DeleteTask(id)
    setTasks(tasks.filter(task => task.id !== id));

  };

  const ToggleTaskApi = async (id: number) => {
    const taskToToggle = tasks.find(task => task.id === id);
    if (taskToToggle) {
      const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed };
      await UpdateTask(id, updatedTask.completed);
      setTasks(tasks.map(task => task.id === id ? updatedTask : task));
    }
  };

  const addTask = (title: string, Deadline: String) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      Deadline,
    };
    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: newTask.id, title: newTask.title, completed: newTask.completed, Deadline: newTask.Deadline })
    });
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={DeleteTaskApi} onToggle={ToggleTaskApi} />
    </div>
  );
};

export default App;