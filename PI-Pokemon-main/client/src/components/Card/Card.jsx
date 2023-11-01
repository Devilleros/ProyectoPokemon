import styles from "./Card.module.css"

export default function Card ({pokemon}){
    const {sprite,name} = pokemon;
    const type1 = pokemon.types[0].name;
    const type2 = pokemon.types[1].name;
    return(<div>
        <div className={styles.cardContainer}>
            <h4 className={styles.sprite}><img src={sprite} alt="img" className="image"/></h4>
            <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.types}>
                    <h4 className={styles.type}>{type1}</h4>
                    {type2 ? <h4 className={styles.type}>{type2}</h4> : null}
                </div>

            </div>
        </div>
    </div>
    )
}