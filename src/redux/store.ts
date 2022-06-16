import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import product from './slices/productSlice';

export const store = configureStore({
    reducer: {
        filter,
        cart,
        product,
    },
});

export type RootState = ReturnType<typeof store.getState>
