import React, { ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../routes'

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({ path, element }) =>
                <Route key={path} path={path} element={element} />
            )}
        </Routes>
    )
}

export default AppRouter