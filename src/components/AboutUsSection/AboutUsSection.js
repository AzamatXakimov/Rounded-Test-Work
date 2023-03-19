import { AboutUsSectionContainer, AboutUsSectionImg, AboutUsSectionInfoBox, AboutUsSectionInfoDesc, AboutUsSectionInfoTitle, AboutUsSectionTag, AboutUsSectionTitle } from "./AboutUsSection.styled";

import AboutUsCherryImg from "../../assets/images/cherry-avout-us-img.jpg"
import { useSelector } from "react-redux";
import { language } from "../../Lang/Lang";

export const AboutUsSection = () => {
    const {lang} = useSelector((state) => state);
    return <>
        <AboutUsSectionTag>
            <AboutUsSectionContainer>
                <AboutUsSectionTitle>
                    {language[lang.lang]?.Main.aboutUs}
                </AboutUsSectionTitle>
                <AboutUsSectionInfoBox data-aos="fade-right">
                    <AboutUsSectionInfoTitle>
                        {language[lang.lang]?.aboutUsSection.aboutUsTitle}
                    </AboutUsSectionInfoTitle>
                    <AboutUsSectionInfoDesc>
                        {language[lang.lang]?.aboutUsSection.aboutUsDesc}
                    </AboutUsSectionInfoDesc>
                </AboutUsSectionInfoBox>
                <AboutUsSectionImg src={AboutUsCherryImg} data-aos="fade-left" alt="cherry image" />
            </AboutUsSectionContainer>
        </AboutUsSectionTag>
    </>
}
