import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vaga from "./pages/vaga";
import Home from "./pages/home";

export default function Navegacao() {

    return (

        <BrowserRouter>
        
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/vaga" element = {<Vaga/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}