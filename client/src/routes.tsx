import React from 'react'
import { Navigate } from 'react-router-dom'
import About from './pages/About'
import Auth from './pages/Auth'
import Main from './pages/Main'
import Shop from './pages/Shop'
import { 
    ABOUT_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE, 
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
    {
        path: LOGIN_ROUTE,
        element: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth />
    },
    {
        path: SHOP_ROUTE,
        element: <Shop />
    },
    {
        path: ABOUT_ROUTE,
        element: <About />
    },
]