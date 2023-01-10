import React from 'react'
import { HeroList } from './HeroList'

const DcPage = () => {
  return (
    <>
      <h1 className='font-bold text-center p-4 text-3xl'>DC Comics</h1>
      <div className='flex flex-wrap justify-center items-center '>
      <HeroList brand={"DC Comics"}/>

      </div>
    </>
  )
}

export default DcPage