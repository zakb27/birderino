import { createSlice, configureStore } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        isAdmin: false,
        // other user-related information
    },
    reducers: {
        login: (state, action) => {
            console.log(action.payload)
            state.isLoggedIn = true;
            state.isAdmin = action.payload;
            // set other user-related information
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.isAdmin = false;
            // reset other user-related information
        },
    },
});

export const {login,logout} = userSlice.actions;

export default userSlice.reducer;
