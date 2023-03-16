import { Route, Routes, useNavigate } from "react-router-dom"
import { AllCoursesContainer, AllCoursesList, AllCoursesNavItem, AllCoursesNavLink, AllCoursesNavList, AllCoursesSection, AllCoursesTitle } from "./AllCourses.styled";
import { CourseCard } from "../CoruselCard/CourseCard";
import { AllCourseCard } from "../AllCoruselCard/AllCourseCard";
import { useEffect } from "react";

export const AllCourses = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate("popular")
    }, []);

    const CoursesArr = [1,2,3,4,5,6]
    return <>
        <AllCoursesSection>
            <AllCoursesContainer>
                <AllCoursesTitle>
                    все курсы
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
