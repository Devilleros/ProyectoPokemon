import axios from "axios"

import { GET_POKEMONS , GET_ACCESS , USER_DATA} from "./actionsTypes"

export function getPokemons(){
    return async function(dispatch){
        const response = await axios("http://localhost:3001/pokemon/pokemons")
        return dispatch({
            type: GET_POKEMONS,
            payload: response.data
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
    
}