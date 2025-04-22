import React from "react";
import "./Modal.css"; // Stil faylını da əlavə edəcəyik.

const Modal = ({ isOpen, onClose, onSubmit, newUser, setNewUser }) => {
  if (!isOpen) return null; // Eğer modal açıq deyilsə, heç bir şey göstərmə

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Add New User</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(); // Submit işlemi
          }}
        >
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={newUser.username}
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Website"
            value={newUser.website}
            onChange={(e) =>
              setNewUser({ ...newUser, website: e.target.value })
            }
            required
          />
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
