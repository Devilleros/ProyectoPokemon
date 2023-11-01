//import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { loginAccess , setUser } from "../../redux/actions"
//import { useState } from "react";

import styles from "./FormLogin.module.css" 

export default function FormLogin (){
const dispatch = useDispatch();
const user = useSelector((state)=>state.user);


function handleChange (e){
    dispatch(setUser({name : e.target.name , value: e.target.value}))
    //setErrors(validate({...user , [e.target.name]: e.target.value}))
}

function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginAccess(user))
}

    return <form onSubmit={handleSubmit}>
        <div className={styles.formBox}>
            <div>
                <h1>LOGIN</h1>
            </div>
            <div>
                <label>correo:</label>
                <input type="text" name="email" onChange={handleChange} value={user.email}/>
                <label >Password:</label>
                <input type="text" name="password" onChange={handleChange} value={user.password}/>
                <button>login</button>
            </div>
        </div>
    </form>
}