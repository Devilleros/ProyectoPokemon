import Card from "../Card/Card"
//import Search from "../Search/Search"

import styles from "./Cards.module.css"

export default function Cards({allPokemons ,  handleRemovePokemon , handleFavorite , favPokemons,handleFavoriteRemove}){
    const pokemons = allPokemons;
    return(<div >
        <div>Cartas:</div>
        <div className={styles.cardsContainer}>
        {
            pokemons?.map(pokemon => <Card pokemon={pokemon} 
                key={pokemon.id} 
                handleRemovePokemon={handleRemovePokemon} 
                handleFavorite={handleFavorite} 
                favPokemons={favPokemons}
                handleFavoriteRemove={handleFavoriteRemove}
                />)
        }

        </div>
    </div>
    )
};