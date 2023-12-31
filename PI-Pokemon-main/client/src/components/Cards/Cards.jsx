import Card from "../Card/Card"
//import Search from "../Search/Search"

import styles from "./Cards.module.css"

export default function Cards({pokemons ,  handleRemovePokemon , handleFavorite , favPokemons,handleFavoriteRemove,filPokemons,favSelector,filterType}){
    return(<div >
        <div className={styles.cardsContainer}>
        {
            pokemons?.map(pokemon => <Card pokemon={pokemon} 
                key={pokemon.id} 
                handleRemovePokemon={handleRemovePokemon} 
                handleFavorite={handleFavorite} 
                favPokemons={favPokemons}
                handleFavoriteRemove={handleFavoriteRemove}
                filPokemons={filPokemons}
                favSelector={favSelector}
                filterType={filterType}
                />)
        }

        </div>
    </div>
    )
};