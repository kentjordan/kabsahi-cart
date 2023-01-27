
import { createSlice } from '@reduxjs/toolkit';
import IInitialState from '@redux/types/cart'

const initialState: IInitialState = { isOpened: false, items: [] };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        openCart(state, action) {
            state.isOpened = action.payload;
        },
        closeCart(state, action) {
            state.isOpened = action.payload;
        }
    }
});

export const { openCart, closeCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export default createSlice;
