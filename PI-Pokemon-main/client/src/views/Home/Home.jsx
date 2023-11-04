import { useEffect} from "react";
//, useState 
import {useSelector,useDispatch} from "react-redux";

import { getPokemons,getPokemon, deletePokemon } from "../../redux/actions";
//getPokemon

import "./Home.module.css";
import Nav from "../../components/Nav/Nav";
import Cards from "../../components/Cards/Cards";


export default function Home (){
    const dispatch = useDispatch();
    const allPokemon = useSelector((state)=> state.allPokemon);

    async function handleAddPokemon (){
        await dispatch(getPokemon());
        dispatch(getPokemons());
    }

    async function handleRemovePokemon (id){
        await dispatch(deletePokemon(id));
        dispatch(getPokemons());
    }
    
    useEffect(()=>{
        dispatch(getPokemons());
    },[dispatch])
    
    return <div>
        <Nav/>
        <button onClick={handleAddPokemon}>🎁 Gacha</button>
        <button>✪</button>
        <Cards allPokemons ={allPokemon}  handleRemovePokemon={handleRemovePokemon}/>
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