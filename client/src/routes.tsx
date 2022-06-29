import React from 'react'
import { Navigate } from 'react-router-dom'
import Main from './pages/Main'
import { 
    MAIN_ROUTE, 
} from './utils/consts'

export const authAdminRoutes = [

]

export const authUserRoutes = [

]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        element: <Main />
    },
]