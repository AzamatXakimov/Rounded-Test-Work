import { MissionsContainer, MissionsDesc, MissionsFirstdInfoBox, MissionsImg, MissionsInner, MissionsSecondInfoBox, MissionsSection, MissionsTitle } from "./Missions.styled";

import MissionCherry1 from "../../assets/images/mission-cherry-1.jpg";
import MissionCherry2 from "../../assets/images/mission-cherry-2.jpg";
import MissionCherry3 from "../../assets/images/mission-cherry-3.jpg";
import MissionCherry4 from "../../assets/images/mission-cherry-4.jpg";

export const Missions = () => {
    return <>
        <MissionsSection>
            <MissionsContainer>
                <MissionsTitle>
                    Миссия и цели Учебного центра Виноградарства!
                </MissionsTitle>
                <MissionsInner>
                    <MissionsImg src={MissionCherry1} alt="Cherrys image"/>
                    <MissionsImg src={MissionCherry2} alt="Cherrys image"/>
                    <MissionsImg src={MissionCherry3} alt="Cherrys image"/>
                    <MissionsImg src={MissionCherry4} alt="Cherrys image"/>

                    <MissionsFirstdInfoBox>
                        <MissionsDesc>
                            Улучшить развитие отрасли виноградарства в Узбекистане. Повышение качества обслуживания и культуры пития; Развитие барного искусства и барной индустрии; Разработка и реализация новых более качественных правил и стандартов профессиональной деятельности барменов, официантов и других работников индустрии гостеприимства;
                        </MissionsDesc>
                    </MissionsFirstdInfoBox>
                    <MissionsSecondInfoBox>
                        <MissionsDesc>
                            Впервые в Узбекистане, наиболее полная программа о виноделии нашей страны, который познакомит вас с историей и современным развитием виноделия Узбекистана! Откройте для себя мир виноградарство, вместе с нами
                        </MissionsDesc>
                    </MissionsSecondInfoBox>
                </MissionsInner>
            </MissionsContainer>
        </MissionsSection>
    </>
}
