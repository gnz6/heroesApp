import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
    
    const {state} = useContext(AuthContext)
    console.log(state.logged);

    return ( (state.logged)
    ? children
    : <Navigate to={"/login"}/>
    )
}
