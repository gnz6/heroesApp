import {heroes} from "../data/heroes"

export const getHeroesByBrand =( brand )=>{
    const brands = [ "DC Comics", "Marvel Comics"];
    if(!brands.includes(brand)) throw new Error(`${brand} isn a valid brand`)

    return heroes.filter( heroe=> heroe.publisher === brand)

}