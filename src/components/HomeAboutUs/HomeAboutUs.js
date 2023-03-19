import { HomeAboutUsContainer, HomeAboutUsDesc, HomeAboutUsImg, HomeAboutUsInfoBox, HomeAboutUsInner, HomeAboutUsSection, HomeAboutUsText, HomeAboutUsTitle } from "./HomeAboutUs.styled";

import cherryAboutUsImg from "../../assets/images/cherry-avout-us-img.jpg"
import { useSelector } from "react-redux";
import { language } from "../../Lang/Lang";

export const HomeAboutUs = () => {
    const {lang} = useSelector((state) => state);
    return <>
        <HomeAboutUsSection>
            <HomeAboutUsContainer>
                <HomeAboutUsInner>
                    <HomeAboutUsTitle>
                        {language[lang.lang]?.Main.aboutUs}
                    </HomeAboutUsTitle>
                    <HomeAboutUsInfoBox data-aos="fade-right">
                        <HomeAboutUsText>
                            {language[lang.lang]?.aboutUsSection.aboutUsTitle}
                        </HomeAboutUsText>
                        <HomeAboutUsDesc>
                            {language[lang.lang]?.aboutUsSection.aboutUsDesc}
                        </HomeAboutUsDesc>
                    </HomeAboutUsInfoBox>
                </HomeAboutUsInner>
                <HomeAboutUsImg src={cherryAboutUsImg} data-aos="fade-left" alt="cherry image"/>
            </HomeAboutUsContainer>
        </HomeAboutUsSection>
    </>
}
