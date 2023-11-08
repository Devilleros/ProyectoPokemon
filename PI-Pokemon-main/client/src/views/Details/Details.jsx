import styles from "./Details.module.css";
import { useEffect } from "react";
import { getPokemonDetail , clearDetails} from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import Nav from "../../components/Nav/Nav";
import { useNavigate } from "react-router-dom";

export default function Details (){
    const user = useSelector((state)=> state.user)
    const pokemonDetail = useSelector((state)=> state.pokemonDetail);
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    useEffect(()=>{
        if (!user.access) {
            navigate("/");
          } else { 
            const URL = window.location.href;
            let idPos = URL.split("/").length;
            const id = URL.split("/")[idPos-1];
            dispatch(getPokemonDetail(id));
          } 
        return(()=>{
            dispatch(clearDetails())
        })
    },[dispatch , user.access , navigate])
            
    return(
        <div>
            <Nav/>
            <div className={styles.divDetail}>
                <div className={styles.nameImg}>
                    <h1>{pokemonDetail.name}</h1>
                    <img src={pokemonDetail.image} alt="Cargando..." />
                </div>
                <div>
                    <p><h4>types: </h4> {pokemonDetail.type1} {pokemonDetail.type2 ? `, ${pokemonDetail.type2}`: ""}</p>
                    <p><h4>id Api: </h4>{pokemonDetail.idApi}</p>
                    <p><h4>hp: </h4>{pokemonDetail.hp}</p>
                    <p><h4>ataque: </h4>{pokemonDetail.attack}</p>
                    <p><h4>defensa: </h4>{pokemonDetail.defense}</p>
                    <p><h4>Ataque Sp: </h4>{pokemonDetail.specialAttack}</p>
                    <p><h4>Defensa Sp:</h4>{pokemonDetail.specialDefense}</p>
                    <p><h4>velocidad: </h4>{pokemonDetail.speed}</p>
                    <p><h4>Altura: </h4>{(pokemonDetail.height/10).toFixed(1)} m</p>
                    <p><h4>Peso: </h4>{(pokemonDetail.weight/10).toFixed(1)} kg</p>
                </div>
            </div>
        </div>
    )
};
