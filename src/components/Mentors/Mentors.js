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
import { useSelector } from "react-redux";
import { language } from "../../Lang/Lang";

export const Mentors = () => {
    const {lang} = useSelector((state) => state);
    return <>
        <MentorsSection>
            <MentorsContainer>
                <MentorsInner>
                    <MentorsTitle>
                        {language[lang.lang]?.Main.mentors}
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
                            {language[lang.lang]?.mentorsSection.mentorsTitle}
                        </MentorsText>
                        <MentorsDescBox>
                            <MentorsDesc>
                                {language[lang.lang]?.mentorsSection.mentorsDesc}
                            </MentorsDesc>
                        </MentorsDescBox>

                        <MentorsTextBox data-aos="fade-up-left" data-aos-anchor-placement="bottom-bottom">
                            <MentorsTextBoxDesc>
                                {language[lang.lang]?.mentorsSection.mentorsText}
                            </MentorsTextBoxDesc>
                        </MentorsTextBox>
                    </MentorsInfoBox>
                </MentorsInner>
            </MentorsContainer>
        </MentorsSection>
    </>
}
