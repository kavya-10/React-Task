import React, { useState, useEffect } from 'react';
import UserProfile from './UserProfile';
import Loader from './Loader';
import './UserList.css';


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);
  const toggleFavorite = (userId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(userId)
        ? prevFavorites.filter((id) => id !== userId)
        : [...prevFavorites, userId]
    );
  };
  const updateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
  };
  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    setFavorites((prevFavorites) => prevFavorites.filter((id) => id !== userId));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="user-list">
      {users.map(user => (
        <UserProfile key={user.id} user={user}
        isFavorite={favorites.includes(user.id)}
        toggleFavorite={toggleFavorite} 
        updateUser={updateUser}
        deleteUser={deleteUser}/>
      ))}
    </div>
  );
};

export default UserList;
