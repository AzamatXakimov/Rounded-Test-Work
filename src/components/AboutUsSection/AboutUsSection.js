import { AboutUsSectionContainer, AboutUsSectionImg, AboutUsSectionInfoBox, AboutUsSectionInfoDesc, AboutUsSectionInfoTitle, AboutUsSectionTag, AboutUsSectionTitle } from "./AboutUsSection.styled";

import AboutUsCherryImg from "../../assets/images/cherry-avout-us-img.jpg"

export const AboutUsSection = () => {
    return <>
        <AboutUsSectionTag>
            <AboutUsSectionContainer>
                <AboutUsSectionTitle>
                    О нас
                </AboutUsSectionTitle>
                <AboutUsSectionInfoBox>
                    <AboutUsSectionInfoTitle>
                        Учебный центр Виноградства
                    </AboutUsSectionInfoTitle>
                    <AboutUsSectionInfoDesc>
                        Это уникальный образовательный проект, созданный для тех, кто хочет построить серьезную карьеру в винной индустрии, повысить свою квалификацию или просто получить базовые знания о вине, чтобы испытывать еще больше удовольствия от благородного напитка и самостоятельно выбирать хорошее в ресторане или супермаркете.
                    </AboutUsSectionInfoDesc>
                </AboutUsSectionInfoBox>
                <AboutUsSectionImg src={AboutUsCherryImg} alt="cherry image"/>
            </AboutUsSectionContainer>
        </AboutUsSectionTag>
    </>
}
