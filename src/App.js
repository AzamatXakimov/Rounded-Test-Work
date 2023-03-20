import { Route, Routes } from "react-router-dom"
import GlobalStyles from "./styles/globalStyles"
import Aos from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react"
import { Admin } from "./pages/Admin/Admin"
import { Login } from "./pages/Login/Login"
import { User } from "./pages/User/User"
export const App = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return <>
        <>
            <Routes>
                <Route path="/*" element={<User/>}/>
                <Route path="/admin/*" element={<Admin/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </>
        <GlobalStyles/>
    </>
}
