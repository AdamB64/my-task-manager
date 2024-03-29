// TaskList.tsx
import React from 'react';
import Task from './Task';

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggle }) => {
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
                        <span style={{ textDecoration: 'underline' }}>Title:</span> {task.title + " "}
                    </span>
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        <span style={{ textDecoration: 'underline' }}>Deadline:</span> {task.Deadline}
                    </span>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
