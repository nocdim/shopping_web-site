import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import { IProduct } from "../models/IProduct"

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1234/api' }),
    endpoints: (build) => ({
        fetchAllProducts: build.query<IProduct[], number>({
            query: (limit: number = 8) => ({
                url: '/product',
                params: {
                    _limit: limit
                }
            })
        })
    })
})