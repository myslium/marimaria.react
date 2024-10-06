import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vaga from "./pages/vaga";
import Home from "./pages/home";
import BuscarVaga from "./pages/buscar";

export default function Navegacao() {

    return (

        <BrowserRouter>
        
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/vaga" element = {<Vaga/>}/>
                <Route path="/buscar" element = {<BuscarVaga/>}/>
                <Route path="/buscar:id" element = {<BuscarVaga/>}/>


            </Routes>
        
        </BrowserRouter>
    )
}