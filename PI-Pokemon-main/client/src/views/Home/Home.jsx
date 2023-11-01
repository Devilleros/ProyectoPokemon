import { useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";

import { getPokemons } from "../../redux/actions";

import "./Home.module.css"
import Cards from "../../components/Cards/Cards"


export default function Home (){
    const dispatch = useDispatch();
    const allPokemon = useSelector((state)=> state.allPokemon);

    useEffect(()=>{
        dispatch(getPokemons())
        /*
            return(()=>{
                clearDetails()
            }) Al desmontar
        */
    },[dispatch])

    return <div>
        <h2>Home</h2>
        <Cards allPokemons ={allPokemon}/>
    </div>
};