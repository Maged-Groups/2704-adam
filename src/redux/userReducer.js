import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'userReducer',
    initialState: {
        user: {
            firstName: 'adam',
            lastName: 'sherif',
            gender: 'male',
        },
        token: null,
        isLoggedin: false
    },
    reducers: {
        rdxLoggedin: () => { console.log('setUserName function fired') }
    }
});
// In your wishlistReducer.js




export default userReducer.reducer