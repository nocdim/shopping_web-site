import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IBrand } from "../models/IBrand"

export const brandAPI = createApi({
    reducerPath: 'brandAPI',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:1234'}),
    endpoints: (build) => ({
        fetchAllBrands: build.query<IBrand[], IBrand[]>({
            query: () => ({
                url: '/api/brand',
            })
        })
    })
})