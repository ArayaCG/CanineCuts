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
        setUserAppointments: (state, action) => {
            state.userAppointments = action.payload;
        },
        logoutUser: (state) =>{
            state.userActive = {}
        },
        cancelAppointment: (state, action) =>{
            state.userAppointments = state.userAppointments.map((appointment)=>{
                if(appointment.id === action.payload){
                    return {...appointment, status:"cancelled"}
                }
                return appointment;
            })
        },
    },
});

export const { setUserActive, setUserAppointments, logoutUser, cancelAppointment } = userSlice.actions;
