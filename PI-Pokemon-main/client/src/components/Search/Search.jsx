import { useState } from "react";
import styles from "./Search.module.css";


export default function Search ({handleSearch}){

    const [stringSearch , setStringSearch] = useState("");

    function handleChange(e){
        e.preventDefault();
        setStringSearch(e.target.value);
        console.log(stringSearch);
    }

    function handleSearchLocal(e){
        e.preventDefault()
        handleSearch(stringSearch)
    }

    return(
        <div className={styles.SearchDiv}>
            <form >
                <input type="search" placeholder="Busca a tu pokemon" value={stringSearch} onChange={handleChange}/>
                <button onClick={handleSearchLocal}>Lupa</button>
            </form>
        </div>
    )
}
//<button type="submit" onClick={handleSubmit}>🔍︎</button>