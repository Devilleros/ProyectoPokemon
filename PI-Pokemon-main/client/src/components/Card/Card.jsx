import styles from "./Card.module.css"

export default function Card (){
    return(<div className={styles.cardContainer}>
        <h4>Esto es una tarjeta</h4>
        <h4>sprite</h4>
        <h3>Name:</h3>
        <h4>type1</h4>
        <h4>type2</h4>
    </div>
    )
}