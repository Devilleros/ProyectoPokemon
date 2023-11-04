import { useEffect } from "react";
//, useState 
import {useSelector,useDispatch} from "react-redux";

import { getPokemons,getPokemon, deletePokemon, addFavorite, removeFavorite , setFavSelector } from "../../redux/actions";

import "./Home.module.css";
import Nav from "../../components/Nav/Nav";
import Cards from "../../components/Cards/Cards";
import Search from "../../components/Search/Search"


export default function Home (){
    const dispatch = useDispatch();
    const allPokemon = useSelector((state)=> state.allPokemon);
    const favPokemons = useSelector((state)=> state.favoritePokemon);
    const favSelector = useSelector((state) => state.favSelector);
    const user = {email: "juan@gmail.com"};

    async function handleAddPokemon (){
        await dispatch(getPokemon());
        dispatch(getPokemons(user.email));
    }

    async function handleRemovePokemon (id){
        await dispatch(deletePokemon(id));
        dispatch(getPokemons(user.email));
    }

    async function handleFavorite (id){
        await dispatch(addFavorite(id , user.email));
        dispatch(getPokemons(user.email));
    }

    async function handleFavoriteRemove (id){
        await dispatch(removeFavorite(id , user.email));
        dispatch(getPokemons(user.email));
    }
    
    async function handleViewFavorites (){
        await dispatch(setFavSelector())
        dispatch(getPokemons(user.email));
    }
    useEffect(()=>{
        const user = {email: "juan@gmail.com"};
        dispatch(getPokemons(user.email));
    },[dispatch])
    
    return <div>
        <Nav/>
        <button onClick={handleAddPokemon}>🎁 Gacha</button>
        <Search/>
        <button onClick={handleViewFavorites}>{favSelector? "★ Favoritos":"Todos"}</button>
        <Cards allPokemons ={favSelector? favPokemons : allPokemon}
        handleRemovePokemon={handleRemovePokemon} 
        handleFavorite={handleFavorite}
        handleFavoriteRemove={handleFavoriteRemove}
        favPokemons={favPokemons}/>
    </div>
};