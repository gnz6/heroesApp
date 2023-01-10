import React from 'react'
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroByID } from '../helpers/getHeroByID'
import { filterRepeated } from '../helpers/filterRepeated'

export const HeroDetail = () => {

    const { id } = useParams()
    const hero = getHeroByID(id)
    const navigate = useNavigate()
    console.log(hero);
    if (!hero) return <Navigate to={"/marvel"} />

    return (
        <div className='flex-col items-center justify-center w-full h-full text-center p-2'>
            <h4 className='italic'>{hero.publisher} Hero</h4>
            <h1 className='text-4xl font-bold'>{hero.superhero}</h1>
            <div className='flex items-center justify-between border-4 p-8'>

                <div className='p-2'>
                    <img src={`/assets/heroes/${id}.jpg`} className="h-[500px]" />
                </div>
                <div className='flex-col'>
                    <span className='italic text-xl'>First Appearence:</span>
                    <h3 className='text-3xl'>{hero.first_appearance}</h3>

                </div>
                <div className='flex-col'>
                    <span className='italic text-xl'>Alter Ego:</span>
                    <h2  className='text-3xl'>{hero.alter_ego}</h2>
                </div>
                {filterRepeated(hero.alter_ego, hero.characters).length ?
                    <div>
                        <p>Other heroes:</p>
                        <h3>{filterRepeated(hero.alter_ego, hero.characters)}</h3>

                    </div>
                    :
                    null
                }
            </div>
            <button onClick={() => { navigate(-1) }} className="bg-slate-500 p-2 border-gray-200 text-white text-2xl"> Return </button>
        </div>
    )
}
