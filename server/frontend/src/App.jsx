import React, { useState } from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import './App.css'

const App = () => {
    const [refresh, setRefresh] = useState(false);

    const handleRefresh = () => {
        setRefresh(!refresh);
    };

    return (
        <div id='app'>
            <h1>User Management</h1>
            <AddUser onUserAdded={handleRefresh} />
            <UserList key={refresh} />
        </div>
    );
};

export default App;
