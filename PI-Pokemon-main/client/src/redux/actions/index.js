import axios from "axios"

import { 
    GET_POKEMONS ,
    GET_ACCESS , 
    USER_DATA, 
    GET_POKEMON , 
    GET_POKEMON_DETAILS, 
    DELETE_DETAILS, 
    DELETE_POKEMON, 
    POST_FAVORITE,
    DELETE_FAVORITE,
    FAV_SELECTOR
} from "./actionsTypes"

export function getPokemons(email){
    return async function(dispatch){
        const response1 = await axios("http://localhost:3001/pokemon/pokemons");
        const response2 = await axios.get(`http://localhost:3001/pokemon/favorites`,{params:{email: email}});
        const response = {res1: response1.data, res2: response2.data};
        return dispatch({
            type: GET_POKEMONS,
            payload: response
        })
    }
}

export function loginAccess({email,password}){
    return async function(dispatch){
        const response = await axios("http://localhost:3001/user/login",{params:{email,password}})
        return dispatch({
            type: GET_ACCESS,
            payload: response.data
        })
    }
}

export function setUser (input){
    return{
        type: USER_DATA,
        payload :{name: input.name , value: input.value}
    }
    
};

export function getPokemon(){
    return async function(dispatch){
        try {
            const ran = Math.floor(Math.random() * 1017) + 1;
            const response = await axios(`http://localhost:3001/pokemon/pokemons/${ran}`)
            const pokemonData = response.data;

            const postResponse = await axios.post('http://localhost:3001/pokemon/create', pokemonData);
            return dispatch({
                type: GET_POKEMON,
                payload: postResponse.data
            })
        } catch (error) {
            console.log(error);
        }
        
    }
};

export function getPokemonDetail (id){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/pokemon/pokemons/${id}`)
        return dispatch({
            type: GET_POKEMON_DETAILS,
            payload: response.data
        })
    }
}

export function clearDetails(){
    return{
        type: DELETE_DETAILS,
    }
}

export function deletePokemon(id){
    return async function(dispatch){
        const response = await axios.delete(`http://localhost:3001/pokemon/delete/${id}`)
        return dispatch({
            type: DELETE_POKEMON,
            payload: response.data
        })
    }
}

export function addFavorite(id , email) {
    return async function(dispatch){
        const response = await axios.post(`http://localhost:3001/pokemon/favorite/add/${id}`, {email: email});
        return dispatch({
            type: POST_FAVORITE,
            payload: response.data
        })
    }
}

export function removeFavorite(id , email) {
    return async function(dispatch){
        const response = await axios.delete(`http://localhost:3001/pokemon/favorite/remove/${id}`,{params: {email: email}});
        return dispatch({
            type: DELETE_FAVORITE,
            payload: response.data
        })
    }
}

export function setFavSelector(){
    return{
        type:FAV_SELECTOR
    }
}