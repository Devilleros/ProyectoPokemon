import './App.css';
import {Route , Routes , useLocation} from "react-router-dom";
import FormLogin from "./views/FormLogin/FormLogin";
import Nav from "./components/Nav/Nav"
import Home from "./views/Home/Home"
import FormPokemon from './views/FormPokemon/FormPokemon';
import FormRegister from './views/FormRegister/FormRegister';
import Details from './views/Details/Details';


function App() {
  const location = useLocation();

  return (
    <div>
      {
         location.pathname !== "/" && <Nav/>
      }
      <Routes>
        <Route path="/" element={<FormLogin/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create-pokemon' element={<FormPokemon/>}/>
        <Route path='/register' element={<FormRegister/>}/>
        <Route path='/details-pokemon/:id' element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
