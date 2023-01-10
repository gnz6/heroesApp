import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'
import MarvelPage from "../components/MarvelPage"
import DcPage from "../components/DcPage"
import { Search } from '../components/ui/Search'
import { HeroDetail } from '../components/HeroDetail'

export const HeroesRoutes = () => {
    return (
        <>
            < Navbar />
            <Routes>
                <Route path='marvel' element={<MarvelPage />} />
                <Route path='dc' element={<DcPage />} />
                <Route path='search' element={<Search />} />
                <Route path='hero/:id' element={<HeroDetail />} />
                <Route path='/' element={<Navigate to="/login" />} />
            </Routes>
        </>
    )
}
export default HeroesRoutes