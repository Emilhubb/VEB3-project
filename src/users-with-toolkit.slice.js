import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const usersWithToolkit = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    editUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});
export const { setUsers, addUser, editUser } = usersWithToolkit.actions;
export default usersWithToolkit.reducer;
