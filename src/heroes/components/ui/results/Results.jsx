import React from 'react'
import { NoFound } from './NoFound'

export const Results = ({query, heroes}) => {
  return (
    <div>
        <h1>Results for {query}</h1>
        {heroes?.length? 
        heroes.map(h=>(
            <li key={h.id}>
                {h.superhero}
            </li>
        ))

        : <NoFound query={query}/>}
    </div>
  )
}
