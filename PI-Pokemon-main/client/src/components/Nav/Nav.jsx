import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logOut } from "../../redux/actions";

import styles from "./Nav.module.css"

export default function Nav (){
    const dispatch = useDispatch()

    function handleLogOut() {
        dispatch(logOut())
    }


    return <div className={styles.navDiv}>
        <button>
            <Link to="/home" style={{ textDecoration: 'none', color: '#000' }}>HOME</Link>
        </button>
        <div className={styles.divBut}>
            <button onClick={handleLogOut}>LogOut</button>
        </div>
    </div>
}
//Home LogOut inf
//Favoritos Aleatorio editarUsuario searchBar