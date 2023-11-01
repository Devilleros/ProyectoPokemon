import styles from "./FormLogin.module.css" 

export default function FormLogin ({login}){
    return <form>
        <div className={styles.formBox}>
            <div>
                <h1>LOGIN</h1>
            </div>
            <div>
                <label>correo:</label>
                <input type="text"/>
                <label >Password:</label>
                <input type="text" />
            </div>
        </div>
    </form>
}