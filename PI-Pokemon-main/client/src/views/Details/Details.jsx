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
                <div>
                    <h1>{pokemonDetail.name}</h1>
                    <img src={pokemonDetail.image} alt="Cargando..." />
                </div>
                <div>
                    <h2>types: {pokemonDetail.type1} {pokemonDetail.type2 ? `, ${pokemonDetail.type2}`: ""}</h2>
                    <p>id Api: {pokemonDetail.idApi}</p>
                    <p>hp: {pokemonDetail.hp}</p>
                    <p>ataque: {pokemonDetail.attack}</p>
                    <p>defensa :{pokemonDetail.defense}</p>
                    <p>Ataque Sp: {pokemonDetail.specialAttack}</p>
                    <p>Defensa Sp:{pokemonDetail.specialDefense}</p>
                    <p>velocidad: {pokemonDetail.speed}</p>
                    <p>Altura: {(pokemonDetail.height/10).toFixed(1)} m</p>
                    <p>Peso: {(pokemonDetail.weight/10).toFixed(1)} kg</p>
                </div>
            </div>
        </div>
    )
};
