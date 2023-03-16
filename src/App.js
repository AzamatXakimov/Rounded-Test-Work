import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import GlobalStyles from "./styles/globalStyles"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { MainTag } from "./App.styled"
import { Courses } from "./pages/Courses/Courses"
import { AboutUs } from "./pages/AboutUs/AboutUs"
import { SingleCourse } from "./pages/SingleCourse/SingleCourse"
import { Calendar } from "./pages/Calendar/Calendar"

export const App = () => {
    return <>
        <Header />
        <MainTag>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/courses/*" element={<Courses/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/course-single" element={<SingleCourse/>}/>
                <Route path="/calendar" element={<Calendar/>}/>
            </Routes>
        </MainTag>
        <GlobalStyles/>
        <Footer/>
    </>
}
