import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
};

export const userDataSlice = createSlice({
    name: "userDataSlice",
    initialState,
    reducers: {
        SET_USER_DATA: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { SET_USER_DATA } =
    userDataSlice.actions;

export default userDataSlice.reducer;
