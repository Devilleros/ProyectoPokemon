import { GET_POKEMONS , GET_ACCESS , USER_DATA} from "../actions/actionsTypes";

let initialState = {
    user:{email: "",password:"",access:false} ,
    allPokemon:[],
    favoritePokemon:[],
    addFavorite: [],
};

function rootReducer(state = initialState , action){
    switch (action.type) {
         case GET_POKEMONS:
            return{
                ...state,
                allPokemon: action.payload,
            }
        case GET_ACCESS:
            return{
                ...state,
                user: {
                    ...state.user,
                    access: true
                }
            }
        case USER_DATA:{
            return {
                ...state,
                user:{
                    ...state.user,
                    [action.payload.name]: action.payload.value
                }
            }
        }

    
        default:
            return state;
    }
}
export default rootReducer;