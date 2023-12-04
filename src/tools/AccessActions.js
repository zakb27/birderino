// New slice
import { createSlice, configureStore } from '@reduxjs/toolkit'
import {useState} from "react";

const newSlice = createSlice({
    name: 'access',
    initialState: {
        highContrast: false,
        darkMode: false,
        disableAnimations: true,
        sliderState: 17,
        deuter:false,
    },
    reducers: {
        cContrast: (state, action) => {
            state.highContrast = action.payload;
        },
        cDarkMode: (state, action) => {
            state.darkMode = action.payload;
        },
        cAnimations: (state, action) => {
            state.disableAnimations = action.payload;
        },
        cSliders: (state, action) => {
            state.sliderState = action.payload;
        },
        cDeuter: (state, action) => {
            state.deuter = action.payload;
        },
    },
});


export const {cContrast,cDarkMode,cSliders,cDeuter,cAnimations} = newSlice.actions;

export default newSlice.reducer;
