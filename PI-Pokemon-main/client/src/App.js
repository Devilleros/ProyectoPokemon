import './App.css';
import {Route , Routes , useLocation} from "react-router-dom";
//import { useSelector } from 'react-redux';

import FormLogin from "./views/FormLogin/FormLogin";
import Nav from "./components/Nav/Nav"
import Home from "./views/Home/Home"
import FormPokemon from './views/FormPokemon/FormPokemon';
import FormRegister from './views/FormRegister/FormRegister';
import Details from './views/Details/Details';
import Error404 from './views/Error404/Error404';

function App() {
  //const user = useSelector( (state) => state.user);
  const location = useLocation();

  if(true){
    //console.log(user.access);
  return (
    <div>
      {location.pathname === "/home" && <Nav/>}
      {location.pathname === "/create-pokemon" && <Nav/>}
      {location.pathname === "/details-pokemon" && <Nav/>}
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create-pokemon' element={<FormPokemon/>}/>
        <Route path='/details-pokemon/:id' element={<Details/>}/>
        <Route path='*' element={<Error404/>}/>
        <Route path="/" element={<FormLogin/>}/>
        <Route path='/register' element={<FormRegister/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </div>
  );
  }
  // else{
  //   console.log(user.access);
  //   return(
  //     <Routes>
  //       <Route path="/" element={<FormLogin/>}/>
  //       <Route path='/register' element={<FormRegister/>}/>
  //       <Route path='*' element={<Error404/>}/>
  //     </Routes>
  //   )
  // }

}

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//   };
// };

export default (App);

// connect (mapStateToProps)
