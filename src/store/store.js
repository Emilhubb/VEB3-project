import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../users-with-toolkit.slice';
    
const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
