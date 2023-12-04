import {combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './Actions'; // assuming you have a slice for the user
import newReducer from './AccessActions'

//
// const rootReducer = combineReducers({
//     user: userReducer,
//     new: newReducer,
// });

export const Store = configureStore({
    reducer: {
        user: userReducer,
        new: newReducer,
    },
});
