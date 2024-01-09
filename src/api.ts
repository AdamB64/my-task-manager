// api.ts
export const fetchTasks = () => {
    return fetch('http://localhost:3001/Alltasks')
        .then(response => response.json());
};

export const DeleteTask = (id: number) => {
    return fetch(`http://localhost:3001/DeleteTasks`, {
        method: 'DELETE',
    });
};


export const UpdateTask = async (id: number, completed: boolean) => {
    const response = await fetch(`http://localhost:3001/UpdateTask`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, completed })
    });
    const data = await response.json();
    console.log(data.message);
    //if (data.message === 'task updated') {
    //  return data;
    //} else {
    //  throw new Error(data.message);
    //}
};