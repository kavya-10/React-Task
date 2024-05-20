import React, { useState } from 'react';
import { Modal } from 'react-modal';

import { Button, Form } from 'react';


const EditUserModal = ({ user, onSave, onClose }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      address: { ...editedUser.address, [name]: value },
    });
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={editedUser.phone}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formStreet">
            <Form.Label>Street</Form.Label>
            <Form.Control
              type="text"
              name="street"
              value={editedUser.address.street}
              onChange={handleAddressChange}
            />
          </Form.Group>
          <Form.Group controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={editedUser.address.city}
              onChange={handleAddressChange}
            />
          </Form.Group>
          <Form.Group controlId="formZipcode">
            <Form.Label>Zipcode</Form.Label>
            <Form.Control
              type="text"
              name="zipcode"
              value={editedUser.address.zipcode}
              onChange={handleAddressChange}
            />
          </Form.Group>
          <Form.Group controlId="formWebsite">
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              name="website"
              value={editedUser.website}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => onSave(editedUser)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditUserModal;
