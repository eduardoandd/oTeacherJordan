import { Route, Routes } from "react-router-dom"
import { Biografia } from "./Pages/Biografia/Biografia"

const MainRoutes = () =>{
    return(
        <Routes>
            <Route path='/biografia' element={<Biografia />}></Route>
        </Routes>
    )
}

export default MainRoutes