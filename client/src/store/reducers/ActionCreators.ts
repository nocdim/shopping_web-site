import { AppDispatch } from "../store";
import { $authHost, $host } from "./index";
import jwtDecode from 'jwt-decode';
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const { data } = await $host.get<IUser[]>('api/user/')
        dispatch(userSlice.actions.usersFetchingSuccess(data))
    } catch (e) {
        if (e instanceof Error) {
            dispatch(userSlice.actions.usersFetchingError(e.message))
        }
    }
}

export const check = () => async (dispatch: AppDispatch) => {
    const { data } = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}