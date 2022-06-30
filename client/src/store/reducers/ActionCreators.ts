import { $authHost, $host } from "./index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBrand } from "../../models/IBrand";

export const fetchBrands = createAsyncThunk(
    'brand/fetchAll',
    async(_, thunkAPI) => {
        try {
            const { data } = await $host.get<IBrand[]>('api/brand/')
            return data
        } catch (e) {
            if (e instanceof Error) {
                return thunkAPI.rejectWithValue(e.message)
            }
        }
    }
    
)