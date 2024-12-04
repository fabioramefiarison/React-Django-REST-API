import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateUser from './UpdateUser';



const UserList = () => {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    }, []);

    const refreshUsers = () => {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    };

    const handleEdit = (id) => {
        setSelectedUserId(id);
    };

    const handleDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/users/${id}/`)
            .then(() => {
                // Mettre à jour la liste après suppression
                setUsers(users.filter(user => user.id !== id));
            })
            .catch(error => console.error(error));
    };
    
    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.first_name} {user.last_name} ({user.email})
                        <button onClick={() => handleEdit(user.id)}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            {selectedUserId && (
                <UpdateUser userId={selectedUserId} onUserUpdated={refreshUsers} />
            )}
        </div>
    );
};

export default UserList;
