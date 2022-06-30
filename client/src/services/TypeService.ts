import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IType } from "../models/IType"

export const typeAPI = createApi({
    reducerPath: 'typeAPI',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:1234'}),
    endpoints: (build) => ({
        fetchAllTypes: build.query<IType[], IType[]>({
            query: () => ({
                url: '/api/type',
            })
        })
    })
})