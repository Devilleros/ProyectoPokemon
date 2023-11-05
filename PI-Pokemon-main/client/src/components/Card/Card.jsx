import styles from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card ({pokemon, handleRemovePokemon , handleFavorite , favPokemons , handleFavoriteRemove, filPokemons}){
    const {sprite,name,idApi} = pokemon;
    const type1 = pokemon.types[0].name;
    let type2;
    if(pokemon.types[1]){
        type2 = pokemon.types[1].name;
    }else{
        type2 = ""
    }
    
    if(filPokemons.length > 0){
        let isFiltered = filPokemons.some((pok) => pok.name === name)
        if(!isFiltered){
            return null
        }
    }

    const isFavorite = favPokemons.some((pok) => pok.name === name);
    const favorite = isFavorite ? "★" : "☆";

    

    function handleRemove(){
        handleRemovePokemon(idApi);
    }
    function handleFavoriteButton(e){
        e.preventDefault()
        isFavorite ? handleFavoriteRemove(idApi) : handleFavorite(idApi)
    }

    return(
    <div>
        <button onClick={handleFavoriteButton}>{favorite}</button>
        <button onClick={handleRemove}>x</button>
        <Link to={`/details-pokemon/${idApi}`} >
            <div className={styles.cardContainer}>
                <h4 className={styles.sprite}><img src={sprite} alt="img" className="image"/></h4>
                <div className={styles.info}>
                    
                    <h3 className={styles.name}>{name}</h3>
                    <div className={styles.types}>
                        <h4 className={styles.type}>{type1} {type2}</h4>
                    </div>
                </div>
            </div>
        </Link>
    </div>
    )
}
//