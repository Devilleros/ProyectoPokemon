import { useEffect } from "react";
//, useState 
import {useSelector,useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

import { 
    getPokemons,
    getPokemon, 
    deletePokemon, 
    addFavorite, 
    removeFavorite , 
    setFavSelector , 
    filterPokemon,
    cleanSearch 
} from "../../redux/actions";

import "./Home.module.css";
import Nav from "../../components/Nav/Nav";
import Cards from "../../components/Cards/Cards";
import Search from "../../components/Search/Search";


export default function Home (){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allPokemon = useSelector((state)=> state.allPokemon);
    const favPokemons = useSelector((state)=> state.favoritePokemon);
    const favSelector = useSelector((state) => state.favSelector);
    const filPokemons = useSelector((state)=> state.filPokemon);
    const user = useSelector((state)=> state.user);

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
    
    function handleSearch(stringSearch){
        if(stringSearch !== ""){
            dispatch(filterPokemon(stringSearch));
        }else{
            dispatch(cleanSearch());
        }
    }

    
    useEffect(() => {
        if (!user.access) {
          navigate("/");
        } else { 
          dispatch(getPokemons(user.email));
        }
      }, [dispatch, user.access, navigate, user.email]);
    
    return <div>
        <Nav/>
        <button onClick={handleAddPokemon}>🎁 Gacha</button>
        <Search handleSearch={handleSearch}/>
        <button onClick={handleViewFavorites}>{favSelector? "★ Favoritos":"Todos"}</button>
        <Cards pokemons ={favSelector? favPokemons : allPokemon}
        handleRemovePokemon={handleRemovePokemon} 
        handleFavorite={handleFavorite}
        handleFavoriteRemove={handleFavoriteRemove}
        favPokemons={favPokemons}
        filPokemons={filPokemons}/>
    </div>
};