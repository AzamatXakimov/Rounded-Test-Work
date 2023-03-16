import styled from "styled-components";
import CoursesCherryBg from "../../assets/images/Courses-cherry-bg.jpg"

export const CoursesHeroTag = styled.section`
    margin-bottom: 66px;
    padding-top: 96px;
    padding-bottom: 163px;
    background-image: url(${CoursesCherryBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;

export const CoursesHeroContainer = styled.div`
    max-width: 1218px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
`;

export const CoursesHeroInfoBox = styled.div`
    max-width: 570px;
    width: 100%;
`;

export const CoursesHeroTitle = styled.h2`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 30px;
    font-family: 'NEXT ART';
    font-weight: 700;
    font-size: 44px;
    line-height: 50px;
    letter-spacing: -0.35px;

    color: #0085ca;

    &::before{
        display: block;
        width: 7px;
        height: 81px;
        margin: 10px;
        background-color: #0085ca;
        content: '';
    }
`;

export const CoursesHeroDesc = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'NEXT ART';
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: -0.35px;
    color: #FFFFFF;
`