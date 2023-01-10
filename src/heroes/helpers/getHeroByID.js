import {heroes} from "../data/heroes"

export const getHeroByID=(id)=>{
    const hero = heroes.find(h => h.id === id)
    return hero 
}