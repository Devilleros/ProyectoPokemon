import Search from "../Search/Search"

import styles from "./Nav.module.css"

export default function Nav (){




    return <div className={styles.navDiv}>
        <button>Home</button>
        <Search />
        <div>
            <button>LogOut</button>
            <button>info</button>
        </div>
    </div>
}
//Home LogOut inf
//Favoritos Aleatorio editarUsuario searchBar