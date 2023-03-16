import { MentorsContainer, MentorsDesc, MentorsDescBox, MentorsImg, MentorsInfoBox, MentorsInner, MentorsSection, MentorsText, MentorsTextBox, MentorsTextBoxDesc, MentorsTitle } from "./Mentors.styled";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import Mentor1 from "../../assets/images/mentor-1.jpg";
import Mentor2 from "../../assets/images/mentor-2.jpg";
import Mentor3 from "../../assets/images/mentor-3.jpg";
import Mentor4 from "../../assets/images/mentor-4.jpg";
import Mentor5 from "../../assets/images/mentor-5.jpg";

export const Mentors = () => {
    return <>
        <MentorsSection>
            <MentorsContainer>
                <MentorsInner>
                    <MentorsTitle>
                        Наставники
                    </MentorsTitle>

                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        modules={[Pagination]}
                        className="mentors-Swiper"
                    >
                        <SwiperSlide>
                            <MentorsImg src={Mentor1} alt="mentor-image"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MentorsImg src={Mentor2} alt="mentor-image"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MentorsImg src={Mentor3} alt="mentor-image"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MentorsImg src={Mentor4} alt="mentor-image"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MentorsImg src={Mentor5} alt="mentor-image"/>
                        </SwiperSlide>
                    </Swiper>

                    <MentorsInfoBox>
                        <MentorsText>
                            Курс "Производство столового винограда"
                        </MentorsText>
                        <MentorsDescBox>
                            <MentorsDesc>
                                Современная программа обучения и постоянная поддержка экспертов-преподавателей позволит вам продуктивно и быстро освоить данную сферу.
                            </MentorsDesc>
                        </MentorsDescBox>

                        <MentorsTextBox>
                            <MentorsTextBoxDesc>
                                Составленвиноградарями и виноделами с опытом работы в Узбекистане, России и Франции.
                            </MentorsTextBoxDesc>
                        </MentorsTextBox>
                    </MentorsInfoBox>
                </MentorsInner>
            </MentorsContainer>
        </MentorsSection>
    </>
}
