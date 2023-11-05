import { useState } from "react"
import style from "./FormRegister.module.css"
import { registerNewUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { validate } from "./validate";
import { useNavigate } from "react-router-dom";

export default function FormRegister (){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form , setForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState({
        email: "",
        name:"",
        password:""
    })

    function handleChange (e){
        e.preventDefault();
        setForm({...form , [e.target.name] : e.target.value});
        setError(validate({...form, [e.target.name]: e.target.value}));
    }

    async function handleRegister (e){
        e.preventDefault();
        if(error.email==="" && error.name==="" && error.password=== ""){
            await dispatch(registerNewUser(form));
            navigate("/")
        }else{
            window.alert("escriba bien")
        }
    }

    return(
        <div className={style.divForm}>
            <form>
                <label>Nombre: </label>
                <label className={style.errorMessage}>{error.name ? error.name : ""}</label>
                <input name="name" onChange={handleChange} value={form.name} className={style.registerInput}/>
                <label>Correo Electronico: </label>
                <label className={style.errorMessage}>{error.email ? error.email : ""}</label>
                <input name="email" onChange={handleChange} value={form.email} className={style.registerInput}/>
                <label>Password: </label>
                <label className={style.errorMessage}>{error.password ? error.password : ""}</label>
                <input type="password" name="password" onChange={handleChange} value={form.password} className={style.registerInput}/>
                <button  onClick={handleRegister} className={style.registerButton}>Registrarse</button>
            </form>
        </div>
    )
}