import styles from "./FormPokemon.module.css" 

export default function FormPokemon (){
    return <form>
        <div className={styles.formBox}>
            <div>
                <h1>Create</h1>
            </div>
            <div>
                <label>Name:</label>
                <input type="text"/>
                <label >Dato:</label>
                <input type="text" />
            </div>
        </div>
    </form>
}