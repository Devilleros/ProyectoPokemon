import Card from "../Card/Card"
import Search from "../Search/Search"

import styles from "./Cards.module.css"

export default function Cards({allPokemons}){
    const pokemons = allPokemons;
    return(<div >
        <div>Cartas:</div>
        <Search/>
        <div className={styles.cardsContainer}>
        {
            pokemons?.map(pokemon => <Card pokemon={pokemon} key={pokemon.id}/>)
        }

        </div>
    </div>
    )
};