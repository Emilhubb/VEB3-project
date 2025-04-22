import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers, addUser } from "../users-with-toolkit.slice";
import Modal from "../modals/modal";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const BASE_URL = `https://jsonplaceholder.typicode.com/users`;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    website: "",
  });

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      dispatch(setUsers(data));
    };
    getUsers();
  }, [dispatch]);

  const handleAddUserClick = () => {
    setIsModalOpen(true); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const userWithId = {
      ...newUser,
      id: Math.floor(Math.random() * 10000),
    };
    dispatch(addUser(userWithId));
    setIsModalOpen(false); // Modalı bağla
    setNewUser({ name: "", username: "", website: "" }); 
  };

  return (
    <>
      <h1>Users</h1>
      <button onClick={handleAddUserClick}>Add User</button>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <p>{user.website}</p>
            <hr />
          </div>
        );
      })}

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          newUser={newUser}
          setNewUser={setNewUser}
        />
      )}
    </>
  );
};

export default Users;
