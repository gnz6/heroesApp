import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/marvel", {
      replace: true
    })
  }

  return (
    <div className='p-16 items-center justify-center'>
      <h1 className='font-bold text-5xl'>Login</h1>
      <hr />
      <button className='border-2 bg-blue-500 text-white p-2 rounded-md'
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}

export default Login