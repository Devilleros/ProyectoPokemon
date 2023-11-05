import { useDispatch,useSelector } from "react-redux"
import { loginAccess , setUser } from "../../redux/actions"
import { useEffect } from "react";
import { useNavigate, Link} from "react-router-dom"
//import { useState } from "react";

import styles from "./FormLogin.module.css" 

export default function FormLogin (){
const dispatch = useDispatch();
const navigate = useNavigate();
const user = useSelector((state)=>state.user);
//const [toHome,setToHome] = useState(false);

function handleChange (e){
    if(e.target.name === "email" || e.target.name === "password"){
        dispatch(setUser({name : e.target.name , value: e.target.value}))
    }
    //setErrors(validate({...user , [e.target.name]: e.target.value}))
}

async function handleSubmit(e) {
    e.preventDefault();
    await dispatch(loginAccess(user))
    //user.access && navigate("/home")
}

useEffect(() => {
    if (user.access) {
      navigate("/home");
    }
  }, [navigate, user.access]);

useEffect(()=>{
    dispatch(setUser({name: "email", value:""}));
    dispatch(setUser({name: "password", value:"",}));
    dispatch(setUser({name: "access", value: false}));
},[dispatch])


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
                <Link to="/register">Registrarse</Link>
            </div>
        </div>
    </form>
}