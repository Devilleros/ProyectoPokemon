import Card from "../Card/Card"
import Search from "../Search/Search"

import styles from "./Cards.module.css"

export default function Cards(){
    return(<div >
        <div>Cartas:</div>
        <Search/>
        <div className={styles.cardsContainer}>
        <Card/>
        <Card/>

        </div>
    </div>
    )
};