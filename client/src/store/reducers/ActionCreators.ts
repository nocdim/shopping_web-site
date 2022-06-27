import { AppDispatch } from "../store";
import { $authHost, $host } from "./index";
import jwtDecode from 'jwt-decode';
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const { data } = await $host.get<IUser[]>('api/user/')
//         dispatch(userSlice.actions.usersFetchingSuccess(data))
//     } catch (e) {
//         if (e instanceof Error) {
//             dispatch(userSlice.actions.usersFetchingError(e.message))
//         }
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async(_, thunkAPI) => {
        try {
            const { data } = await $host.get<IUser[]>('api/user/')
            return data
        } catch (e) {
            if (e instanceof Error) {
                return thunkAPI.rejectWithValue(e.message)
            }
        }
    }
    
)