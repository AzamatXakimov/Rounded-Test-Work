import { CourseSection } from "../../components/CourseSection/CourseSection"
import { Hero } from "../../components/Hero/Hero"
import { HomeAboutUs } from "../../components/HomeAboutUs/HomeAboutUs"
import { Mentors } from "../../components/Mentors/Mentors"
import { Missions } from "../../components/Missions/Missions"

export const Home = () => {
    return <>
        <Hero/>
        <CourseSection/>
        <HomeAboutUs/>
        <Mentors/>
        <Missions/>
    </>
}
