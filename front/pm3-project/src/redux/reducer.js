import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userActive: {},
    userAppointments: [],
};

export const userSlice = createSlice({
    name: "userData",
    initialState: initialState,
    reducers: {
        setUserActive: (state, action) => {
            state.userActive = action.payload;
        },
    },
});

export const {setUserActive} = userSlice.actions;