import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLocalStorage } from '../../utils/getCartFromLocalStorage';
import { RootState } from '../store';
import { CartItem } from './cartType';

export interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
}
const cartData = getCartFromLocalStorage();

const initialState: CartSliceState = {
    totalPrice: cartData.totalPrice,
    items: cartData.items,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find(
                (obj) =>
                    obj.id === action.payload.id &&
                    obj.size === action.payload.size &&
                    obj.type === action.payload.type &&
                    obj.unikId === action.payload.unikId,
            );

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }

            state.totalPrice = calcTotalPrice(state.items);
        },
        addCount(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }

            state.totalPrice = calcTotalPrice(state.items);
        },
        minusItem(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find(
                (obj) =>
                    obj.id === action.payload.id &&
                    obj.size === action.payload.size &&
                    obj.type === action.payload.type,
            );
            if (findItem) {
                findItem.count--;
            }
            state.totalPrice = calcTotalPrice(state.items);
        },

        removeItem(state, action: PayloadAction<CartItem>) {
            state.items = state.items.filter((obj) => obj.unikId !== action.payload.unikId);
            state.totalPrice = calcTotalPrice(state.items);
        },

        clearItem(state, action) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) =>
    state.cart.items.find((obj) => obj.id === id);

export const { addItem, removeItem, clearItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
