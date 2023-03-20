import { useState } from "react"
import { BuyModal } from "../BuyModal/BuyModal"
import { SingleCourseHeroContainer, SingleCourseHeroIfoTitle, SingleCourseHeroInfoBox, SingleCourseHeroInfoBoxInner, SingleCourseHeroInfoButton, SingleCourseHeroInfoDesc, SingleCourseHeroInfoPrice, SingleCourseHeroInfoText, SingleCourseHeroSection } from "./SingleCourseHero.styled"

export const SingleCourseHero = () => {
    // const {} =  useParams();

    const [buyModal, setBuyModal] = useState(false)
    return <>
        <SingleCourseHeroSection>
            <SingleCourseHeroContainer>
                <SingleCourseHeroInfoBox>
                    <SingleCourseHeroInfoBoxInner>
                        <SingleCourseHeroIfoTitle>
                            Torem ipsum dolor sit 
                        </SingleCourseHeroIfoTitle>
                        <SingleCourseHeroInfoText>
                            старт: 06 февраля
                        </SingleCourseHeroInfoText>
                        <SingleCourseHeroInfoDesc>
                            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                        </SingleCourseHeroInfoDesc>
                        <SingleCourseHeroInfoPrice>
                            200.000 сум
                        </SingleCourseHeroInfoPrice>

                        <SingleCourseHeroInfoButton type="button" onClick={() => {
                            setBuyModal(true)
                        }}>
                            Купить
                        </SingleCourseHeroInfoButton>
                    </SingleCourseHeroInfoBoxInner>
                </SingleCourseHeroInfoBox>
            </SingleCourseHeroContainer>
        </SingleCourseHeroSection>

        <BuyModal modal={buyModal} setModal={setBuyModal}/>
    </>
}
