import React from 'react';
import UserList from './Components/UserList';
import './App.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'


const App = () => (
  <div className="app">
    <h1>User Profiles</h1>
    <UserList />
  </div>
);

export default App;
