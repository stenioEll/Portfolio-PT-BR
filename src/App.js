import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Routes from './components/Pages/routes'
import { Home } from "./components/Pages/Home";
import { Servicos } from "./components/Pages/Servicos";
import { Sobre } from "./components/Pages/Sobre";
import { Skills } from "./components/Pages/Skills";
import { Projects } from "./components/Pages/Projects";
import { Contact } from "./components/Pages/Contact";
import { Main } from './components/Pages/Main';



function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes/>
      </Router>
    </>
  );
}

export default App;
