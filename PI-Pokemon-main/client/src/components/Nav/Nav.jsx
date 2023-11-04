import { Link } from "react-router-dom"

import styles from "./Nav.module.css"

export default function Nav (){




    return <div className={styles.navDiv}>
        <button><Link to="/home">HOME</Link></button>
        <div>               
            <button>LogOut</button>
            <button>info</button>
        </div>
    </div>
}
//Home LogOut inf
//Favoritos Aleatorio editarUsuario searchBar