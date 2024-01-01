// TaskList.tsx
import React, { useEffect, useState } from 'react';
import Task from './Task.ts';


interface TaskListProps {
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ onDelete, onToggle }) => {
    const [tasks, setTasks] = useState<Task[]>([]); // Declare tasks state


    useEffect(() => {
        fetch('http://localhost:3001/Alltasks')
            .then(response => response.json())
            .then(response => {
                setTasks(response);
            });
    }, []);
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggle(task.id)}
                    />
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.title}
                    </span>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;