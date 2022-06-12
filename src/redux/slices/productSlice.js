import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk('product/fetchByIdStatus', async (params) => {
    const { sortBy, order, category } = params;
    const res = await axios.get(
        `https://62921194cd0c91932b6ccbee.mockapi.io/moroz?${category}&sortBy=${sortBy}&order=${order}`,
    );
    return res.data;
});

const initialState = {
    items: [],
    status: '',
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: {
        [fetchProduct.pending]: (state, action) => {
            state.status = 'loading';
            state.items = [];
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.status = 'succes';
            state.items = action.payload;
        },
        [fetchProduct.rejected]: (state, action) => {
            state.status = 'error';
            state.items = [];
        },
    },
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
