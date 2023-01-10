import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../auth/pages/Login'
import { HeroesRoutes } from '../heroes/router/HeroesRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {


    return (
        <>
            <Routes>

                <Route path='login/*' element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />

                <Route path='/*' element={
                    <PrivateRoute>
                        <Routes>
                            <Route path='*' element={<HeroesRoutes />} />
                        </Routes>
                    </PrivateRoute>
                } />

            </Routes>
        </>
    )
}

export default AppRouter