//import { useState } from "react";
import styles from "./Search.module.css"

export default function Search (){

    return(
        <div className={styles.SearchDiv}>
            <form >
                <input type="search" placeholder="Busca a tu pokemon"/>
                <button>Lupa</button>
            </form>
        </div>
    )
}
//<button type="submit" onClick={handleSubmit}>🔍︎</button>