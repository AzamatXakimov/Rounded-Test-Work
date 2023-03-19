import { Route, Routes, useNavigate } from "react-router-dom"
import { AllCoursesContainer, AllCoursesList, AllCoursesNavItem, AllCoursesNavLink, AllCoursesNavList, AllCoursesSection, AllCoursesTitle } from "./AllCourses.styled";
import { AllCourseCard } from "../AllCoruselCard/AllCourseCard";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { language } from "../../Lang/Lang";

export const AllCourses = () => {
    const {lang} = useSelector((state) => state);
    const navigate = useNavigate()
    useEffect(() => {
        navigate("popular")
    }, []);

    const CoursesArr = [1,2,3,4,5,6]
    return <>
        <AllCoursesSection>
            <AllCoursesContainer>
                <AllCoursesTitle>
                    {language[lang.lang]?.Main.allCourses}
                </AllCoursesTitle>
                <AllCoursesNavList>
                    <AllCoursesNavItem>
                        <AllCoursesNavLink to="popular">
                            популярное
                        </AllCoursesNavLink>
                    </AllCoursesNavItem>
                    <AllCoursesNavItem>
                        <AllCoursesNavLink to="lessons">
                            уроки
                        </AllCoursesNavLink>
                    </AllCoursesNavItem>
                    <AllCoursesNavItem>
                        <AllCoursesNavLink to="tasting">
                            дегустация
                        </AllCoursesNavLink>
                    </AllCoursesNavItem>
                </AllCoursesNavList>

                <AllCoursesList>
                    <Routes>
                        <Route path="popular" element={CoursesArr.map(item => <AllCourseCard/>)}/>
                        <Route path="lessons" element={CoursesArr.map(item => <AllCourseCard/>)}/>
                        <Route path="tasting" element={CoursesArr.map(item => <AllCourseCard/>)}/>
                    </Routes>
                </AllCoursesList>
            </AllCoursesContainer>
        </AllCoursesSection>
    </>

}
