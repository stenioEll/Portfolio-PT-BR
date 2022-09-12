import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import react from 'react'

import { Main } from './Main';

import { Home } from './Home';
import { Servicos } from './Servicos';
import { Sobre } from './Sobre';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';


export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/servicos" element={<Servicos/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/projetos" element={<Projects/>}/>
            <Route path="/contatos" element={<Contact/>}/>
        </Routes>
    )
}