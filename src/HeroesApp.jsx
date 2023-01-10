import React from 'react'
import AppRouter from './router/AppRouter'
import { AuthProvider } from './context/AuthProvider'

const HeroesApp = () => {
  return (

    <AuthProvider>
      <AppRouter />
    </AuthProvider>

  )
}

export default HeroesApp