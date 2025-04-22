import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "../users-with-toolkit.slice";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const BASE_URL = `https://jsonplaceholder.typicode.com/users`;

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      dispatch(setUsers(data));
    };
    getUsers();
  }, [dispatch]);
  return (
    <>
      <h1>Users</h1>
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
    </>
  );
};

export default Users;
