import React from 'react';
import PropTypes from 'prop-types';
import './UserProfile.css';
import { FaHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { BsBuildingFill } from "react-icons/bs";
// import './node_modules/bootstrap/dist/css/bootstrap.min.css'


const UserProfile = ({ user,isFavorite, toggleFavorite,updateUser ,deleteUser  }) => {
  const { username, name, email, phone, address, website, company } = user;
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;
  
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateUser(editedUser);
    setIsEditing(false);
  };
  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  return (
    <div className="user-profile">
      <img src={avatarUrl} alt={username} className="avatar"  />
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            value={editedUser.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            value={editedUser.address.street}
            onChange={(e) =>
              setEditedUser((prev) => ({
                ...prev,
                address: { ...prev.address, street: e.target.value },
              }))
            }
          />
          <input
            type="text"
            name="website"
            value={editedUser.website}
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            value={editedUser.company.name}
            onChange={(e) =>
              setEditedUser((prev) => ({
                ...prev,
                company: { ...prev.company, name: e.target.value },
              }))
            }
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div className="user-details">
      <p className='fs-5'>{name}</p>
      <p><FaRegEnvelope/>: {email}</p>
      <p><FaPhone/>: {phone}</p>
      {/* <p>Address: {address.street}, {address.city}</p> */}
      <p><TbWorldWww className='fs-4' />: <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></p>
      <p><BsBuildingFill className='fs-6' />: {company.name}</p>
      <button onClick={handleEdit} className="edit-btn"><FaEdit /></button>
      <button onClick={() => toggleFavorite(user.id)} className="favorite-btn">
        {isFavorite ?<FcLike /> : <FaHeart />}
      </button>
      <button onClick={() => deleteUser(user.id)} className="delete-btn"><FaTrash /></button>

    </div>
      )}
      </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default UserProfile;
