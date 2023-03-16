import { AllCourseCardBottomBox, AllCourseCardDesc, AllCourseCardDescBox, AllCourseCardImg, AllCourseCardInfoBox, AllCourseCardItem, AllCourseCardLink, AllCourseCardLinkImg, AllCourseCardNumber, AllCourseCardTitle, AllCourseCardTitleBox } from "./AllCourseCard.styled"
import cherryCourseImg from "../../assets/images/cherry-course-img.jpg";
import courseArrow from "../../assets/images/arrow-to-right.svg"
export const AllCourseCard = () => {
    return <>
        <AllCourseCardItem>
            <AllCourseCardImg src={cherryCourseImg}/>
            <AllCourseCardBottomBox>
                <AllCourseCardInfoBox>
                    <AllCourseCardTitleBox>
                        <AllCourseCardTitle>
                            Курсы Официанта
                        </AllCourseCardTitle>
                        <AllCourseCardNumber>
                            06
                        </AllCourseCardNumber>
                    </AllCourseCardTitleBox>
                    <AllCourseCardDescBox>
                        <AllCourseCardDesc>
                        Мы поможем вам получить все самые важные и необходимые знания в данной сфере деятельности!
                        </AllCourseCardDesc>
                    </AllCourseCardDescBox>
                </AllCourseCardInfoBox>

                <AllCourseCardLink to="/course-single">
                    <AllCourseCardLinkImg src={courseArrow} alt="arrow"/>
                </AllCourseCardLink>
            </AllCourseCardBottomBox>
        </AllCourseCardItem>
    </>
}
