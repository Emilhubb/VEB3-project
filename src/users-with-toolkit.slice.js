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
  },
});
export const { setUsers, addUser } = usersWithToolkit.actions;
export default usersWithToolkit.reducer;
