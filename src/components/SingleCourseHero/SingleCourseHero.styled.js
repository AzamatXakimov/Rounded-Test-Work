import styled from "styled-components";
import CherruBgImg from "../../assets/images/cherry-avout-us-img.jpg"

export const SingleCourseHeroSection = styled.section`
    position: relative;
    margin-bottom: 58px;
    padding-top: 93px;
    padding-bottom: 125px;
    background-image: url(${CherruBgImg});
    background-position: calc(50% + 380px) calc(50% + 0px);
    background-repeat: no-repeat;
`;

export const SingleCourseHeroContainer = styled.div`
    max-width: 1218px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
`;

export const SingleCourseHeroInfoBox = styled.div`
    position: relative;
    z-index: 2;
    max-width: 707px;
    width: 100%;
    padding: 45px 20px;
    background-color: #0085ca;
`;

export const SingleCourseHeroInfoBoxInner = styled.div`
    max-width: 466px;
    width: 100%;
    margin: 0 auto;
`;

export const SingleCourseHeroIfoTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 24px;
    font-family: 'NEXT ART';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 41px;
    letter-spacing: -0.35px;
    color: #414141;
`;

export const SingleCourseHeroInfoText = styled.strong`
    display: inline-block;
    margin-bottom: 24px;
    font-family: 'NEXT ART';
    font-weight: 700;
    font-size: 24px;
    line-height: 27px;
    letter-spacing: -0.35px;

    color: #fff;
`;

export const SingleCourseHeroInfoDesc = styled.p`
    margin-top: 0;
    margin-bottom: 24px;
    font-family: 'NEXT ART';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140.83%;
    letter-spacing: -0.35px;
    color: #fff;
`;


export const SingleCourseHeroInfoPrice = styled.strong`
    display: block;
    margin-bottom: 24px;
    font-family: 'NEXT ART';
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: -0.35px;
    color: #fff;
`;

export const SingleCourseHeroInfoButton = styled.button`
    display: inline-block;
    max-width: 165px;
    width: 100%;
    padding: 20px;
    font-family: 'NEXT ART';
    font-size: 28px;
    line-height: 33px;
    letter-spacing: -0.35px;
    color: rgba(255, 255, 255, 0.9);

    text-align:center;
    background-color: #d22630;
    border: none;
    cursor: pointer;
`;
