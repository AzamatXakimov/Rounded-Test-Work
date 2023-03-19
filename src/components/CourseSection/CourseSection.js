import { useSelector } from "react-redux";
import { CourseCard } from "../CoruselCard/CourseCard"
import { CoruselContainer, CoruselSectionTag, CoruselTitle, CourseLink, CourselList } from "./CourseSection.styled";
// import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { language } from "../../Lang/Lang";
// import { Pagination } from "swiper";

export const CourseSection = () => {
    const {lang} = useSelector((state) => state);
    return <>
        <CoruselSectionTag>
            <CoruselContainer>
                <CoruselTitle>
                    {language[lang.lang]?.Main.courses}
                </CoruselTitle>

                {/* <Swiper
                    slidesPerView={2.5}
                    modules={[Pagination]}
                    className="courseSwiper"
                >
                    <SwiperSlide>
                        <CourseCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseCard/>
                    </SwiperSlide>
                </Swiper> */}

                <CourselList>
                    <CourseCard/>
                    <CourseCard/>
                </CourselList>

                <CourseLink to="courses">
                    {language[lang.lang]?.Main.viewAll}
                </CourseLink>
            </CoruselContainer>
        </CoruselSectionTag>
    </>
}
