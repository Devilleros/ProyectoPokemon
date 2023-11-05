import { useDispatch,useSelector } from "react-redux"
import { loginAccess , setUser } from "../../redux/actions"
import { useEffect,useState } from "react";
import { useNavigate, Link} from "react-router-dom"

import styles from "./FormLogin.module.css"
import { validate } from "./validate"; 

export default function FormLogin (){
const dispatch = useDispatch();
const navigate = useNavigate();
const user = useSelector((state)=>state.user);

const [error, setError] = useState({
    email: "",
    password:""
})

function handleChange (e){
    if(e.target.name === "email" || e.target.name === "password"){
        dispatch(setUser({name : e.target.name , value: e.target.value}))
        setError(validate({[e.target.name]: e.target.value}));
    }
}

async function handleSubmit(e) { 
    e.preventDefault();
        if(error.email==="" && error.name==="" && error.password=== ""){
            await dispatch(loginAccess(user))
            navigate("/")
        }else{
            window.alert("Revisa los Datos")
        }
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
                <label>correo:</label><label>{error.email}</label>
                <input type="text" name="email" onChange={handleChange} value={user.email}/>
                <label >Password:</label><label>{error.password}</label>
                <input type="password" name="password" onChange={handleChange} value={user.password}/>
                <button>login</button>
                <Link to="/register">Registrarse</Link>
            </div>
        </div>
    </form>
}