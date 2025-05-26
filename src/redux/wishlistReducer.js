import { createSlice } from "@reduxjs/toolkit";

const wishlistReducer = createSlice({
    name: 'wishlistReducer',
    initialState: {
        wishlistItems: [],

    },
    reducers: {
        rdx_add_item_To_wishlist: (state, action) => {
            const product = action.payload;

            const existItem = state.wishlistItems.find(wishlistItem => wishlistItem.id === product.id)

            if (!existItem) {

                const newProduct = { ...product }

                state.wishlistItems.push(newProduct);
            }


        },
        rdx_remove_item_from_wishlist: (state, action) => {
            const id = action.payload;

            state.wishlistItems = state.wishlistItems.filter(wishlistItem => wishlistItem.id !== id);
        }
    }
})

export default wishlistReducer.reducer;

export const { rdx_add_item_to_wishlist, rdx_remove_item_from_wishlist } = wishlistReducer.actions;

