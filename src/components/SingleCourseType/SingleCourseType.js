import { SingleCourseTypeContainer, SingleCourseTypeDesc, SingleCourseTypeImg, SingleCourseTypeItem, SingleCourseTypeList, SingleCourseTypeSection, SingleCourseTypeTitle } from "./SingleCourseType.styled";

import BakalIcon from "../../assets/images/bakal.png"

export const SingleCourseType = () => {
    return <>
        <SingleCourseTypeSection>
            <SingleCourseTypeContainer>
                <SingleCourseTypeTitle>
                    Vorem ipsum dolor 
                </SingleCourseTypeTitle>

                <SingleCourseTypeList>
                    <SingleCourseTypeItem>
                        <SingleCourseTypeImg src={BakalIcon} alt="Bakal image"/>
                        <SingleCourseTypeDesc>
                            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac 
                        </SingleCourseTypeDesc>
                    </SingleCourseTypeItem>
                    <SingleCourseTypeItem>
                        <SingleCourseTypeImg src={BakalIcon} alt="Bakal image"/>
                        <SingleCourseTypeDesc>
                            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac 
                        </SingleCourseTypeDesc>
                    </SingleCourseTypeItem>
                    <SingleCourseTypeItem>
                        <SingleCourseTypeImg src={BakalIcon} alt="Bakal image"/>
                        <SingleCourseTypeDesc>
                            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac 
                        </SingleCourseTypeDesc>
                    </SingleCourseTypeItem>
                    <SingleCourseTypeItem>
                        <SingleCourseTypeImg src={BakalIcon} alt="Bakal image"/>
                        <SingleCourseTypeDesc>
                            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac 
                        </SingleCourseTypeDesc>
                    </SingleCourseTypeItem>
                </SingleCourseTypeList>
            </SingleCourseTypeContainer>
        </SingleCourseTypeSection>
    </>
}
