import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Sort = {
        name: string,
        sortProperty: 'rating' | 'title' | 'price' | '-rating' | '-title' | '-price',
}

interface FilterSliceState {
    searchValue: string,
    categoryId: number ,
    sort: Sort
}

const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: 'rating',
    },
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setSort(state, action: PayloadAction<Sort>) {
            state.sort = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            state.sort = action.payload.sort;
            state.categoryId = Number(action.payload.categoryId);
        },
    },
});

export const { setCategoryId, setSort, setFilters, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
