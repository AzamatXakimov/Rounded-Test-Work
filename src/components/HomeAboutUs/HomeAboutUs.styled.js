import styled from "styled-components";

export const HomeAboutUsSection = styled.section`
    position: relative;
    margin-bottom: 100px;
    padding-top: 139px;
    padding-bottom: 143px;
`;

export const HomeAboutUsContainer = styled.div`
    max-width: 1213px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const HomeAboutUsInner = styled.div`
    position: relative;
    z-index: 2;
`;


export const HomeAboutUsTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 23px;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;

    letter-spacing: -0.35px;
    text-transform: uppercase;

    color: #414141;
`;

export const HomeAboutUsInfoBox = styled.div`
    max-width: 707px;
    width: 100%;
    padding: 59px 25px;
    background-color: #d22630;
`;

export const HomeAboutUsText = styled.h3`
    margin-top: 0;
    margin-bottom: 20px;
    font-family: 'NEXT ART';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: -0.35px;
    color: #fff;
`;

export const HomeAboutUsDesc = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: -0.35px;
    text-transform: uppercase;

    color: #fff;
`;

export const HomeAboutUsImg = styled.img`
    position: absolute;
    top: 0;
    left: calc(50% + 0px);
    width: 699px;
    z-index: 1;
    object-fit: cover;
` 