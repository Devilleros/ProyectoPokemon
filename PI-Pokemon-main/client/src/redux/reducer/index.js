import { 
    GET_POKEMONS , 
    GET_ACCESS , 
    USER_DATA, GET_POKEMON, 
    GET_POKEMON_DETAILS, 
    DELETE_DETAILS, 
    DELETE_POKEMON, 
    POST_FAVORITE, 
    DELETE_FAVORITE, 
    FAV_SELECTOR,
    LOG_OUT,
    FILTER_POKEMON,
    CLEAN_SEARCH,
    FILTER_TYPE,
    REGISTER_USER,} from "../actions/actionsTypes";

let initialState = {
    user:{email: "",password:"",access:false},
    allPokemon:[],
    pokemonDetail:[],
    favoritePokemon:[],
    filPokemon: [],
    favSelector: false,
    filType: "All",
};

function rootReducer(state = initialState , action){
    switch (action.type) {
         case GET_POKEMONS:
            return{
                ...state,
                allPokemon: action.payload.res1,
                favoritePokemon: action.payload.res2,
            }
        case GET_ACCESS:
            return{
                ...state,
                user: {
                    ...state.user,
                    access: action.payload.access
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
        case GET_POKEMON:{
            return {
                ...state,
                allPokemonApi: [...[action.payload]]
           }
        }
        case GET_POKEMON_DETAILS:{
            return{
                ...state,
                pokemonDetail: action.payload
            }
        }

        case DELETE_DETAILS:{
            return{
                ...state,
                pokemonDetail: []
            }
        }

        case DELETE_POKEMON:{
            return{
                ...state,
                allPokemon: action.payload.res1,
            }
        }
        case POST_FAVORITE:{
            return{
                ...state,
                favoritePokemon: action.payload.pokemons
            }
        }
        case DELETE_FAVORITE:{
            return{
                ...state,
                favoritePokemon: action.payload.pokemons
            }
        }
        case FAV_SELECTOR:
            return{
                ...state,
                favSelector: !state.favSelector
            }
        case LOG_OUT:{
            return{
                ...state,
                user: {email: "",password:"",access:false},
                allPokemon:[],
                favoritePokemon:[],
            }
        }
        case FILTER_POKEMON:{
            return{
                ...state,
                filPokemon: action.payload
            }
        }
        case CLEAN_SEARCH:{
            return{
                ...state,
                filPokemon: []
            }
        }
        case FILTER_TYPE:{
            return{
                ...state,
                filType: action.payload
            }
        }
        case REGISTER_USER:{
            console.log(action.payload);
            return{
                ...state
            }
        }
        default:
            return state;
    }
}
export default rootReducer;