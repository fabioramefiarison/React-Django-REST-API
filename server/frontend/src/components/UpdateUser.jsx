import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateUser = ({ userId, onUserUpdated }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Charger les données de l'utilisateur à modifier
        axios.get(`http://127.0.0.1:8000/api/users/${userId}/`)
            .then(response => {
                setFirstName(response.data.first_name);
                setLastName(response.data.last_name);
                setEmail(response.data.email);
            })
            .catch(error => console.error(error));
    }, [userId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://127.0.0.1:8000/api/users/${userId}/`, {
            first_name: firstName,
            last_name: lastName,
            email
        })
        .then(() => onUserUpdated())
        .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Update User</h3>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Update</button>
        </form>
    );
};

export default UpdateUser;
