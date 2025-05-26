import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";

const store = configureStore({
    reducer: {
        userReducer,
        cartReducer,
        wishlistReducer,
    },
});
export default store;