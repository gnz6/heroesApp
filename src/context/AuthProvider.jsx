import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'
import { types } from '../types/types'

const initialState = { logged: false, user: { name: null, id: null } }

const init = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    return {
        logged: !!user,
        user: user
    }
}


export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, initialState, init)

    const login = (name = "") => {

        const user = { name, id: "123" }
        const action = {
            type: types.login,
            payload: user
        }
        localStorage.setItem("user", JSON.stringify(user))
        dispatch(action)
    }

    const logout = () => {
        const action = {
            type: types.logout,
        }

        localStorage.setItem("user", null)
        dispatch(action)
    }


    return (
        <AuthContext.Provider value={{ state, login: login, logout: logout }}>
            {children}
        </AuthContext.Provider>
    )
}
