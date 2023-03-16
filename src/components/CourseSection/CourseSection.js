import { CourseCard } from "../CoruselCard/CourseCard"
import { CoruselContainer, CoruselSectionTag, CoruselTitle, CourseLink, CourselList } from "./CourseSection.styled";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export const CourseSection = () => {
    return <>
        <CoruselSectionTag>
            <CoruselContainer>
                <CoruselTitle>
                    курсы
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
                    Смотреть все
                </CourseLink>
            </CoruselContainer>
        </CoruselSectionTag>
    </>
}
