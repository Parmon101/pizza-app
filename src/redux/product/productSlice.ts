import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product, SearchProductParams, Status } from './productType';

export interface ProductSliceState {
    items: Product[];
    status: Status;
}
export const fetchProduct = createAsyncThunk<Product[], SearchProductParams>(
    'product/fetchByIdStatus',
    async (params) => {
        const { sortBy, order, category } = params;
        const res = await axios.get(
            `https://62921194cd0c91932b6ccbee.mockapi.io/moroz?${category}&sortBy=${sortBy}&order=${order}`,
        );

        return res.data;
    },
);

const initialState: ProductSliceState = {
    items: [],
    status: Status.LOADING,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.status = Status.LOADING;
            state.items = [];
        });

        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });

        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    },
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
