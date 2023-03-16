import { HomeAboutUsContainer, HomeAboutUsDesc, HomeAboutUsImg, HomeAboutUsInfoBox, HomeAboutUsInner, HomeAboutUsSection, HomeAboutUsText, HomeAboutUsTitle } from "./HomeAboutUs.styled";

import cherryAboutUsImg from "../../assets/images/cherry-avout-us-img.jpg"

export const HomeAboutUs = () => {
    return <>
        <HomeAboutUsSection>
            <HomeAboutUsContainer>
                <HomeAboutUsInner>
                    <HomeAboutUsTitle>
                        о нас
                    </HomeAboutUsTitle>
                    <HomeAboutUsInfoBox>
                        <HomeAboutUsText>
                            Учебный центр Виноградства
                        </HomeAboutUsText>
                        <HomeAboutUsDesc>
                            Это уникальный образовательный проект, созданный для тех, кто хочет построить серьезную карьеру в винной индустрии, повысить свою квалификацию или просто получить базовые знания о вине, чтобы испытывать еще больше удовольствия от благородного напитка и самостоятельно выбирать хорошее в ресторане или супермаркете.
                        </HomeAboutUsDesc>
                    </HomeAboutUsInfoBox>
                </HomeAboutUsInner>
                <HomeAboutUsImg src={cherryAboutUsImg} alt="cherry image"/>
            </HomeAboutUsContainer>
        </HomeAboutUsSection>
    </>
}
