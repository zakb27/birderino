import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Actions'; // assuming you have a slice for the user

export const Store = configureStore({
    reducer: {
        user: userReducer,
        // other reducers
    },
});
