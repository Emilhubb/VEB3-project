import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   users : []
}

const usersWithToolkit = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
    }

})
export const { setUsers } = usersWithToolkit.actions;
export default usersWithToolkit.reducer;