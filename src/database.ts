// api.ts
export const fetchTasks = () => {
    return fetch('http://localhost:3001/Alltasks')
        .then(response => response.json());
};

export const DeleteTask = (id: number) => {
    return fetch(`http://localhost:3001/DeleteTask`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    });
    console.log("called");
};


export const UpdateTask = async (id: number, completed: boolean) => {
    const response = await fetch(`http://localhost:3001/UpdateTask`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, completed })
    });
};
