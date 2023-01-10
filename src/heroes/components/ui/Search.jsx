import React from 'react'
import {useForm} from "../../hooks/useForm"
import {useLocation, useNavigate} from "react-router-dom"
import queryString from "query-string";
import { Null } from './results/Null';
import { Results } from './results/Results';
import { searchHero } from '../../helpers/searchHeroes';

export const Search = () => {

  const navigate = useNavigate()
  const location = useLocation()  
  const {searchText , handleInputChange} = useForm({
    searchText : ""
  })

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(searchText.trim().length < 1) return
    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  const {q= ""} = queryString.parse( location.search )
  const heroes = searchHero(q)

  return (
    <div className='flex-col'>
      <h1 className='font-semibold text-center text-4xl'>Search Heroes</h1>
      <hr />

      <div className='flex h-full w-full text-2xl'>
        <div className='w-1/2 border'>
          <form onSubmit={handleSubmit}>
            <input
              type={"text"}
              name="searchText"
              placeholder='Search Heroes' 
              className='w-5/6 p-2'
              onChange={handleInputChange}
              value={searchText}
              />
            <button type='submit' className='w-1/6 border items-end justify-end p-2'> Search </button>

          </form>

        </div>
        <div className='w-1/2'>
        {q.length === 0?
      <Null/>
      :
      <Results query={q} heroes={heroes}/>  
      }


        </div>
      </div>
    </div>
  )
}
