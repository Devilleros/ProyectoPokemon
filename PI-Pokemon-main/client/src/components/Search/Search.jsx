import styles from "./Search.module.css"

export default function Search (){
    return(
        <div className={styles.SearchDiv}>
            <form action="" method="get">
                <input type="text" placeholder="Busca a tu pokemon"/>
                <button type="submit">🔍︎</button>
                <button>✪</button>
            </form>
        </div>
    )
}