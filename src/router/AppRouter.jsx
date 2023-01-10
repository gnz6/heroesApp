import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Login from '../auth/pages/Login'
import { HeroesRoutes } from '../heroes/router/HeroesRoutes';

const AppRouter = () => {


    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<HeroesRoutes/>}/>

            </Routes>
        </>
    )
}

export default AppRouter