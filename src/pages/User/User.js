import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { Courses } from "../Courses/Courses"
import { AboutUs } from "../AboutUs/AboutUs"
import { SingleCourse } from "../SingleCourse/SingleCourse"
import { Calendar } from "../Calendar/Calendar"
import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import { MainTag } from "./User.styled"

export const User = () => {
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
        <Footer/>
    </>
}
