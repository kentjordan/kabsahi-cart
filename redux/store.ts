
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from './slices/cart';
import { foodReducer } from './slices/foods/foods';

const store = configureStore({
    reducer: {
        _cartReducer: cartReducer,
        _foodReducer: foodReducer,
    },
});

export default store;
