// TaskForm.tsx
import React, { useState } from 'react';

interface TaskFormProps {
    onAdd: (title: string, deadline: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleAdd = () => {
        if (title.trim() !== '') {
            onAdd(title, deadline);
            setTitle('');
            setDeadline('');
        }
    };

    return (
        <div>
            <input type="text" value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
            <input type="date" value={deadline} placeholder="Deadline" onChange={(e) => setDeadline(e.target.value)} />
            <button onClick={handleAdd}>Add Task</button>
        </div>
    );
};

export default TaskForm;