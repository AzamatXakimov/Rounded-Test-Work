import styled from "styled-components";
import CherryBg from "../../assets/images/cherry-hero-bg.jpg";
import { Link } from "react-router-dom";
import calendarIcon from "../../assets/images/calendar.svg"
import clockIcon from "../../assets/images/Clock.svg"
import locationIcon from "../../assets/images/location.svg"

export const HeroWrapper = styled.section`
    margin-bottom: 98px;
    padding-top: 141px;
    padding-bottom: 87px;
    background-image: url(${CherryBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

    & {

        .swiper{
            padding-bottom: 136px;
        }
        .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction{
            bottom: 0;
        }

        .swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bulle{
            &:not(:last-child){
                margin-right: 33px;
            }
        }
        .swiper-pagination-bullet {
            width: 93px;
            height: 10px;
            background-color: #fff;
            opacity: 0.5;
            border-radius: 0;
        }
        

        .swiper-pagination-bullet-active {
            background-color: #fff;
            opacity: 1;
        }
    }
`;

export const HeroContainer = styled.div`
    max-width: 1218px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
`

export const HeroInner =  styled.div`
    display: flex;
`;

export const HeroTitleBox = styled.div`
    max-width: 649px;
    width: 100%;
`;
export const HeroTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 30px;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 60px;
    line-height: 73px;
    letter-spacing: -0.35px;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const HeroTitleRedText = styled.span`
    color: #d22933;
`;

export const HeroLink = styled(Link)`
    display: inline-block;
    max-width: 182px;
    width: 100%;
    padding: 22px;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: -0.35px;
    text-transform: capitalize;

    color: #fff;

    background-color: #d22630;
    text-decoration: none;
    text-align: center;
`;

export const HeroInfoBox = styled.div`
    max-width: 350px;
    width: 100%;
    margin-left: 81px;
    padding-top: 47px;
`;

export const HeroInfoDay = styled.span`
    display: inline-flex;
    align-items: center;
    margin-bottom: 50px;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.35px;
    text-transform: uppercase;
    color: #fff;


    &::before{
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-right: 13px;
        background-image: url(${calendarIcon});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        content: '';
    }
`;
export const HeroInfoClock = styled.span`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.35px;
    text-transform: uppercase;
    color: #fff;


    &::before{
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-right: 13px;
        background-image: url(${clockIcon});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        content: '';
    }
`;
export const HeroInfoLocation = styled.span`
    display: flex;
    margin-bottom: 106px;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.35px;
    text-transform: uppercase;
    color: #fff;


    &::before{
        display: inline-block;
        width: 21px;
        flex-shrink: 0;
        height: 24px;
        margin-right: 16px;
        background-image: url(${locationIcon});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        content: '';
    }
`;

export const HeroPriceText = styled.strong`
    display: inline-block;
    font-family: 'NEXT ART';
    font-weight: 700;
    font-size: 40px;
    line-height: 45px;
    letter-spacing: -0.35px;

    color: #fff;
`