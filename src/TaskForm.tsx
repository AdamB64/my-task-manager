// TaskForm.tsx
import React, { useState } from 'react';

interface TaskFormProps {
    onAdd: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const handleAdd = () => {
        if (title.trim() !== '') {
            onAdd(title);
            setTitle('');
        }
    };

    return (
        <div>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={handleAdd}>Add Task</button>
        </div>
    );
};

export default TaskForm;