import React from "react";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "../users-with-toolkit.slice";

const Contact = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const BASE_URL = `https://jsonplaceholder.typicode.com/users`;

  useEffect(() => {
    if (users.length === 0) {
      const fetchUsers = async () => {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        dispatch(setUsers(data));
      };
      fetchUsers();
    }
  }, [dispatch, users.length]);

  return (
    <>
      <h1>Contact</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.phone}</p>
            <p>{user.email}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default Contact;
