import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "authentication",
    initialState: false,

    reducers: {
        authSuccess: (state) => true, // Use 'authSuccess' here
    },
});

export const { authSuccess } = counterSlice.actions; // Corrected the action name

export default counterSlice;
