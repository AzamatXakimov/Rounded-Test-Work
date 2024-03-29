import { HeroContainer, HeroInfoBox, HeroInfoClock, HeroInfoDay, HeroInfoLocation, HeroInner, HeroLink, HeroPriceText, HeroTitle, HeroTitleBox, HeroTitleRedText, HeroWrapper } from "./Hero.styled";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useSelector } from "react-redux";
import { language } from "../../Lang/Lang";

export const Hero = () => {
    const {lang} = useSelector((state) => state);
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };
    return <>
        <HeroWrapper>
            <HeroContainer>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <HeroInner>
                            <HeroTitleBox>
                                <HeroTitle>
                                    Учебный центр <HeroTitleRedText>Виноградарства!</HeroTitleRedText>
                                </HeroTitle>
                                <HeroLink to="/course-single">{language[lang.lang]?.Main.buy}</HeroLink>
                            </HeroTitleBox>

                            <HeroInfoBox>
                                <HeroInfoDay>
                                    20 марта
                                </HeroInfoDay>

                                <HeroInfoClock>
                                    13:00
                                </HeroInfoClock>

                                <HeroInfoLocation>
                                    Наш адрес: Абая 6А, Учебный центр виноградарства.
                                </HeroInfoLocation>

                                <HeroPriceText>700.000 сум</HeroPriceText>
                            </HeroInfoBox>
                        </HeroInner>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HeroInner>
                            <HeroTitleBox>
                                <HeroTitle>
                                    Учебный центр <HeroTitleRedText>Виноградарства!</HeroTitleRedText>
                                </HeroTitle>
                                <HeroLink to="/course-single">{language[lang.lang]?.Main.buy}</HeroLink>
                            </HeroTitleBox>

                            <HeroInfoBox>
                                <HeroInfoDay>
                                    20 марта
                                </HeroInfoDay>

                                <HeroInfoClock>
                                    13:00
                                </HeroInfoClock>

                                <HeroInfoLocation>
                                    Наш адрес: Абая 6А, Учебный центр виноградарства.
                                </HeroInfoLocation>

                                <HeroPriceText>700.000 сум</HeroPriceText>
                            </HeroInfoBox>
                        </HeroInner>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HeroInner>
                            <HeroTitleBox>
                                <HeroTitle>
                                    Учебный центр <HeroTitleRedText>Виноградарства!</HeroTitleRedText>
                                </HeroTitle>
                                <HeroLink to="/course-single">
                                    {language[lang.lang]?.Main.buy}
                                </HeroLink>
                            </HeroTitleBox>

                            <HeroInfoBox>
                                <HeroInfoDay>
                                    20 марта
                                </HeroInfoDay>

                                <HeroInfoClock>
                                    13:00
                                </HeroInfoClock>

                                <HeroInfoLocation>
                                    Наш адрес: Абая 6А, Учебный центр виноградарства.
                                </HeroInfoLocation>

                                <HeroPriceText>700.000 сум</HeroPriceText>
                            </HeroInfoBox>
                        </HeroInner>
                    </SwiperSlide>
                </Swiper>
            </HeroContainer>
        </HeroWrapper>
    </>
}
