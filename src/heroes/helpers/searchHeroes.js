import {heroes} from "../data/heroes"

export const searchHero = (query = "") =>{
    query = query.toLowerCase().trim()
    if(query.length === 0) return []
    const queryHeroes = heroes.filter(hero => hero.superhero.toLowerCase().includes(query))
    return queryHeroes 
}