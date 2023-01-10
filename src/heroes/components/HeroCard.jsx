import React from 'react'
import {Link} from "react-router-dom"
import { filterRepeated } from '../helpers/filterRepeated'

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {


  const imgUrl = `/assets/heroes/${id}.jpg`

  return (
    <div className='flex-col w-[350px] h-[330px] m-2  border-2 items-center justify-center rounded-md text-center hover:bg-gray-200 transition duration-200'>
      <h1 className="font-bold text-2xl" >{superhero}</h1>
          <h3>First Appearence: {first_appearance}</h3>
      <div className='flex items-center mt-4'>
        <img src={imgUrl} alt={superhero} className="items-start justify-start object-cover h-[250px]" />
        <div className='flex-col font-semibold ml-2 flex-wrap text-center'>
          <h3>Actual Hero: {alter_ego}</h3>

        {filterRepeated(alter_ego, characters).length ? 
        <div>

        <h3>Other Alter Egos:</h3>  
        <h3>{filterRepeated(alter_ego, characters)}</h3>
        </div>
        :
        null
      }
          <p>{publisher}</p>
          <button className='bg-slate-500 p-2 text-white rounded-md'>
          <Link to={`/hero/${id}`}>See Detail</Link>

          </button>

        </div>

      </div>




    </div>
  )
}
