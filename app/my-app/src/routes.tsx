import { Route, Routes } from "react-router-dom"
import { Biografia } from "./Pages/Biografia/Biografia"
import { MeuCompromisso } from "./Pages/MeuCompromisso/MeuCompromisso"

const MainRoutes = () =>{
    return(
        <Routes>
            <Route path='/biografia' element={<Biografia />}></Route>
            <Route path='/meucompromisso' element={<MeuCompromisso />}></Route>
        </Routes>
    )
}

export default MainRoutes