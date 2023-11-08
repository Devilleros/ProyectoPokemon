import styles from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card ({pokemon, handleRemovePokemon , handleFavorite , favPokemons , handleFavoriteRemove, filPokemons, favSelector,filterType}){
    const {sprite,name,idApi} = pokemon;
    const type1 = pokemon.types[0].name;
    let type2;
    if(pokemon.types[1]){
        type2 = pokemon.types[1].name;
    }else{
        type2 = ""
    }

    if(filterType !== "All"){
        if(type2 !== ""){
            if(type1 !== filterType && type2 !== filterType){
                return null;
            }
        }else if(type1 !== filterType){
            return null;
        }
    }
    
    if(filPokemons.length > 0){
        let isFiltered = filPokemons.some((pok) => pok.name === name)
        if(!isFiltered){
            return null
        }
    }

    const isFavorite = favPokemons.some((pok) => pok.name === name);
    const favorite = isFavorite ? "★" : "✰";
    if(favSelector && !isFavorite){ return null }

    function handleRemove(){
        handleRemovePokemon(idApi);
    }
    function handleFavoriteButton(){
        isFavorite ? handleFavoriteRemove(idApi) : handleFavorite(idApi)
    }

    return(
        <div className={styles.divCard}>
            <div className={styles.divButtons}>
                <div className={styles.divButFav}>
                    <button onClick={handleFavoriteButton}>{favorite}</button>
                </div>
                <div className={styles.divButDel}>
                    <button onClick={handleRemove}>x</button>
                </div>
            </div>
            <div className={styles.divLink}>
                <Link to={`/details-pokemon/${idApi}`} style={{ textDecoration: 'none', color: '#000' }}>
                    <div className={styles.divName}>
                        <h3 className={styles.name}>{name}</h3>
                    </div>
                    <div className={styles.divSprite}>
                        <img src={sprite} alt="img" className="image"/>
                    </div>
                    <div className={styles.types}>
                        <div className={styles.types}>
                            <h4 className={styles.type}>{type1} {type2? `/ ${type2}`: ``}</h4>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}