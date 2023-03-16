import { CoursesHeroContainer, CoursesHeroDesc, CoursesHeroInfoBox, CoursesHeroTag, CoursesHeroTitle } from "./CoursesHero.styled"

export const CoursesHero = () => {
    return <>
        <CoursesHeroTag>
            <CoursesHeroContainer>
                <CoursesHeroInfoBox>
                    <CoursesHeroTitle>
                        все курсы Corem ipsum dolor sit 
                    </CoursesHeroTitle>
                    <CoursesHeroDesc>
                        Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </CoursesHeroDesc>
                </CoursesHeroInfoBox>
            </CoursesHeroContainer>
        </CoursesHeroTag>
    </>
}
