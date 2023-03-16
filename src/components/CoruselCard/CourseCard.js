import { CourseCardBottomBox, CourseCardDesc, CourseCardDescBox, CourseCardImg, CourseCardInfoBox, CourseCardItem, CourseCardLink, CourseCardLinkImg, CourseCardNumber, CourseCardTitle, CourseCardTitleBox } from "./CourseCard.styled"
import cherryCourseImg from "../../assets/images/cherry-course-img.jpg";
import courseArrow from "../../assets/images/arrow-to-right.svg"
export const CourseCard = () => {
    return <>
        <CourseCardItem>
            <CourseCardImg src={cherryCourseImg}/>
            <CourseCardBottomBox>
                <CourseCardInfoBox>
                    <CourseCardTitleBox>
                        <CourseCardTitle>
                            Курсы Официанта
                        </CourseCardTitle>
                        <CourseCardNumber>
                            06
                        </CourseCardNumber>
                    </CourseCardTitleBox>
                    <CourseCardDescBox>
                        <CourseCardDesc>
                        Мы поможем вам получить все самые важные и необходимые знания в данной сфере деятельности!
                        </CourseCardDesc>
                    </CourseCardDescBox>
                </CourseCardInfoBox>

                <CourseCardLink to="/course-single">
                    <CourseCardLinkImg src={courseArrow} alt="arrow"/>
                </CourseCardLink>
            </CourseCardBottomBox>
        </CourseCardItem>
    </>
}
