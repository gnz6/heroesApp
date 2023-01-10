import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import Login from '../auth/pages/Login'

export const PublicRoute = ({ children }) => {
    
    const {state} = useContext(AuthContext)
    console.log(state.logged);
    return ( (!state.logged)
    ? children
    : <Navigate to={"/marvel"}/>
    )
}
