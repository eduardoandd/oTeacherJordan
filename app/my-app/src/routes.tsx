import { Route, Routes } from "react-router-dom"
import { Biografia } from "./Pages/Biografia/Biografia"
import { MeuCompromisso } from "./Pages/MeuCompromisso/MeuCompromisso"
import { Livros } from "./Pages/Livros/Livros"

const MainRoutes = () =>{
    return(
        <Routes>
            <Route path='/biografia' element={<Biografia />}></Route>
            <Route path='/meucompromisso' element={<MeuCompromisso />}></Route>
            <Route path='/livros' element={<Livros />}></Route>
        </Routes>
    )
}

export default MainRoutes