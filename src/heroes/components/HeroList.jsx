import React from 'react'
import { getHeroesByBrand } from '../helpers/getHeroesByBrand'
import { HeroCard } from './HeroCard'

export const HeroList = ({brand}) => {

    const heroes = getHeroesByBrand(brand)

  return (
    <>
        {heroes? heroes.map(heroe=>
        <div className='flex  flex-wrap'>
          <HeroCard key={heroe.id} {...heroe}/>

        </div>
        )
        : null}
    </>
  )
}
