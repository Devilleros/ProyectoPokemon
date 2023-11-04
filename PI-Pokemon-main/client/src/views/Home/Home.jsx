import { useEffect} from "react";
//, useState 
import {useSelector,useDispatch} from "react-redux";

import { getPokemons,getPokemon, deletePokemon, addFavorite, removeFavorite} from "../../redux/actions";

import "./Home.module.css";
import Nav from "../../components/Nav/Nav";
import Cards from "../../components/Cards/Cards";
import Search from "../../components/Search/Search"


export default function Home (){
    const dispatch = useDispatch();
    const allPokemon = useSelector((state)=> state.allPokemon);
    //const user = useSelector((state) => state.user);
    const favPokemons = useSelector((state)=> state.favoritePokemon);
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
    }

    async function handleFavoriteRemove (id){
        await dispatch(removeFavorite(id , user.email));
    }
    
    useEffect(()=>{
        const user = {email: "juan@gmail.com"};
        dispatch(getPokemons(user.email));
    },[dispatch])
    
    return <div>
        <Nav/>
        <button onClick={handleAddPokemon}>🎁 Gacha</button>
        <Search/>
        <button>✪</button>
        <Cards allPokemons ={allPokemon}
        handleRemovePokemon={handleRemovePokemon} 
        handleFavorite={handleFavorite}
        handleFavoriteRemove={handleFavoriteRemove}
        favPokemons={favPokemons}/>
    </div>
};



//onClick={handleAddPokemon}
//handleChange={handleChange} handleSearchButton={handleSearchButton}
        //const allPokemonAPI = useSelector((state)=> state.allPokemonAPI)
    
        //const allPokemon = [...allPokemonBD , ...allPokemonAPI]
    
        //const [filtered ,setFiltered] = useState(allPokemon);
        //const [stringSearch,setStringSearch] = useState("")
    
        // function handleChange(e){
        //     e.preventDefault();
        //     console.log(stringSearch);
        //     setStringSearch(e.target.value);
        //     };
    
        // function handleSearchButton(){
        //     const filteredPokemons = allPokemon.filter((pok) => pok.name.toLowerCase().includes(stringSearch.toLowerCase()));
        //     setFiltered(filteredPokemons);
        // }
    
        // function handleAddPokemon(){
        //     dispatch(getPokemon())
        // }