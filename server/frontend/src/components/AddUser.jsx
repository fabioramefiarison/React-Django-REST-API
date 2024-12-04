import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AddUser = ({ onUserAdded }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [alerte, setAlerte] = useState("")

    useEffect(() => {
        setTimeout(() => {
            setAlerte("")
        }, 3000);
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/users/', { first_name: firstName, last_name: lastName, email })
            .then(response => {
                onUserAdded();
                setFirstName('');
                setLastName('');
                setEmail('');
                setAlerte("Utilisateur ajoutée !")
            })
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>{alerte}</p>
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
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUser;
