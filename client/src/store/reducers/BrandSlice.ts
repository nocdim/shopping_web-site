import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBrand } from "../../models/IBrand";
import { fetchBrands } from "./ActionCreators";

interface BrandState {
    users: IBrand[];
    isLoading: boolean;
    error: string;
}

const initialState = {
    users: [] as IBrand[],
    isLoading: false,
    error: '',
}

export const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: { },
    extraReducers: {
        [fetchBrands.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchBrands.fulfilled.type]: (state, action: PayloadAction<IBrand[]>) => {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        },
        [fetchBrands.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default brandSlice.reducer