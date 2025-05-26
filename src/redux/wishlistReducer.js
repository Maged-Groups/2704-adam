import { createSlice } from "@reduxjs/toolkit";

const wishlistReducer = createSlice({
    name: 'wishlistReducer',
    initialState: {
        wishlistItems: [],

    },
    reducers: {
        rdx_toggle_wishlist_item: (state, action) => {
            const product = action.payload;

            const existItem = state.wishlistItems.find(wishlistItem => wishlistItem.id === product.id)

            if (!existItem)
                state.wishlistItems.push(product);
            else
                state.wishlistItems = state.wishlistItems.filter(wishlistItem => wishlistItem.id !== product.id);
        },

    }
})

export default wishlistReducer.reducer;

export const { rdx_toggle_wishlist_item } = wishlistReducer.actions;

