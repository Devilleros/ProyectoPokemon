import './App.css';
import {Route , Routes , useLocation} from "react-router-dom";
import FormLogin from "./components/FormLogin/FormLogin";
import Nav from "./components/Nav/Nav"


function App() {
  const location = useLocation();

  return (
    <div>
      {
         location.pathname !== "/" && <Nav/>
      }
      <Routes>
        <Route path="/" element={<FormLogin/>}/>
      </Routes>
    </div>
  );
}

export default App;
