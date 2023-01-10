import React from 'react'

export const NoFound = ({query}) => {
  return (
    <div className='bg-red-600 text-gray-100 p-2'>
        <h1>No results for {query}</h1>
    </div>
  )
}
