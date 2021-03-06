import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IUser } from "../models/IUser"

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:1234'}),
    endpoints: (build) => ({
        createUser: build.mutation<IUser, IUser>({
            query: (user) => ({
                url: '/api/user/reg',
                method: 'POST',
                body: user,
            })
        })
    })
})