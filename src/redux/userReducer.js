import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'userReducer',
    initialState: {
        user: null,
        isLoggedin: false
    },
    reducers: {
        rdxLoggedin: (state, action) => {
            state.user = action.payload;
            state.isLoggedin = true;
        },
        rdxLoggedout: (state) => {
            state.user = null;
            state.isLoggedin = false;
        },

    }
});
// In your wishlistReducer.js




export default userReducer.reducer

export const { rdxLoggedin, rdxLoggedout } = userReducer.actions;