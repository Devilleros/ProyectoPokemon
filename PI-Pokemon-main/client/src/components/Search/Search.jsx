import { useState } from "react";
import styles from "./Search.module.css";


export default function Search ({handleSearch, handleFilType}){

    const [stringSearch , setStringSearch] = useState("");

    function handleChange(e){
        e.preventDefault();
        setStringSearch(e.target.value);
    }

    function handleSearchLocal(e){
        e.preventDefault()
        handleSearch(stringSearch)
    }

    function handleSelector(e){
        e.preventDefault()
        handleFilType(e.target.value)
    }

    return(
        <div className={styles.SearchDiv}>
            <form >
                <input className={styles.search} type="search" placeholder="Busca a tu pokemon" value={stringSearch} onChange={handleChange}/>
                <button onClick={handleSearchLocal} className={styles.btnSrc}>🔍︎</button>
                <select name="" id="typeSelect" onChange={handleSelector}>
                    <option value="All">All types</option>
                    <option value="bug">bug</option>
                    <option value="dark">dark</option>
                    <option value="dragon">dragon</option>
                    <option value="electric">electric</option>
                    <option value="fairy">fairy</option>
                    <option value="fighting">fighting</option>
                    <option value="fire">fire</option>
                    <option value="flying">flying</option>
                    <option value="ghost">ghost</option>
                    <option value="grass">grass</option>
                    <option value="ground">ground</option>
                    <option value="ice">ice</option>
                    <option value="normal">normal</option>
                    <option value="poison">poison</option>
                    <option value="psychic">psychic</option>
                    <option value="rock">rock</option>
                    <option value="shadow">shadow</option>
                    <option value="steel">steel</option>
                    <option value="unknown">unknown</option>
                    <option value="water">water</option>
                    
                </select>
            </form>
        </div>
    )
}
//<button type="submit" onClick={handleSubmit}>🔍︎</button>