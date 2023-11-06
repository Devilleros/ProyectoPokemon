import { useDispatch,useSelector } from "react-redux"
import { loginAccess , setUser } from "../../redux/actions"
import { useEffect,useState } from "react";
import { useNavigate, Link} from "react-router-dom"

import styles from "./FormLogin.module.css"
import { validate } from "./validate"; 

export default function FormLogin (){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [error, setError] = useState({
        email: "",
        password:""
    })
    
    const [form , setForm] = useState({
        email: "",
        password: ""
    })
    
    const user = useSelector((state)=>state.user);

    async function handleChange (e){
        e.preventDefault();
        setForm({...form , [e.target.name] : e.target.value});
        setError(validate({...form, [e.target.name]: e.target.value}));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError(validate(form))
        if(error.email === "" && error.password === ""){        
            await dispatch(setUser({name: "email", value: form.email}));
            await dispatch(setUser({name: "password", value: form.password}));
            await dispatch(loginAccess(user));
        }else{
            window.alert("Revisa los Datos")
        }
    }

    useEffect(() => {
        if (user.access) {
        navigate("/home");
        }
    }, [navigate, user]);

    useEffect(()=>{
        dispatch(setUser({name: "email", value:""}));
        dispatch(setUser({name: "password", value:"",}));
        dispatch(setUser({name: "access", value: false}));
    },[dispatch])


    return (<form onSubmit={handleSubmit}>
        <div className={styles.formBox}>
            <div>
                <h1>LOGIN</h1>
            </div>
            <div>
                <label>correo:</label><label>{error.email}</label>
                <input type="text" name="email" onChange={handleChange} value={form.email}/>
                <label >Password:</label><label>{error.password}</label>
                <input type="password" name="password" onChange={handleChange} value={form.password}/>
                <button type="submit">login</button>
                <Link to="/register">Registrarse</Link>
            </div>
        </div>
    </form>
    )
}