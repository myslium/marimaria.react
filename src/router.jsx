import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vaga from "./pages/vaga";

export default function Navegacao() {

    return (

        <BrowserRouter>
        
            <Routes>
                <Route path="/" element = {<Vaga/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}