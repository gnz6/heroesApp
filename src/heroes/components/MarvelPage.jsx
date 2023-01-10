import React from 'react'
import { HeroList } from './HeroList'

const MarvelPage = () => {
  return (
    <>
      <h1 className='font-bold text-center p-4 text-3xl'>Marvel Comics</h1>
      <div className='flex flex-wrap justify-center items-center '>
      <HeroList brand={"Marvel Comics"}/>

      </div>
    </>
  )
}

export default MarvelPage