import "./Details.module.css";
import { useEffect } from "react";
import { getPokemonDetail , clearDetails} from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import Nav from "../../components/Nav/Nav";

export default function Details (){

    const pokemonDetail = useSelector((state)=> state.pokemonDetail);
    const dispatch = useDispatch();
   
    useEffect(()=>{
        const URL = window.location.href;
        let idPos = URL.split("/").length;
        const id = URL.split("/")[idPos-1];
        dispatch(getPokemonDetail(id));
        return(()=>{
            dispatch(clearDetails())
        })
    },[dispatch])
            
    return(
        <div>
            <Nav/>
            <h2>Details:</h2>
            <h1>nombre</h1>
            <h2>types: {pokemonDetail.type1} {pokemonDetail.type2 ? `${pokemonDetail.type2}`: ""}</h2>
            <h1>{pokemonDetail.name}</h1>
            <img src={pokemonDetail.image} alt="Cargando..." />
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
    )
};
