import { createSlice } from "@reduxjs/toolkit";
import FoodsInitialStates from "./state";

const foodSlice = createSlice({
    name: 'Foods',
    initialState: FoodsInitialStates,
    reducers: {
        incrementQty(state, action) {
            const { food, variation, item, itemOptions } = action.payload;
            ++state.foods[food].types[variation].items[item].itemOptions[itemOptions].cartQty;
        },
        decrementQty(state, action) {
            const { food, variation, item, itemOptions } = action.payload;
            --state.foods[food].types[variation].items[item].itemOptions[itemOptions].cartQty;
        },
        addToCart(state, action) {
            state.cart = action.payload;
        },
        removeFromCart(state, action) {
            const filteredState = state.cart.filter((e) => e.pk !== action.payload);
            state.cart = filteredState;
        },
        openFoodOptions(state, action) {
            state.foodOptions = action.payload;
        },
        closeFoodOptions(state, action) {
            state.foodOptions.isOpened = action.payload;
        },
    }
});

export const { incrementQty, decrementQty, addToCart, removeFromCart, openFoodOptions, closeFoodOptions } = foodSlice.actions;
export const foodReducer = foodSlice.reducer;

export default foodSlice;
