import { Link } from "react-router-dom";
import styled from "styled-components";

export const AllCourseCardItem = styled.li`
    display: flex;
    flex-direction: column;
    max-width: 389px;
    width: 100%;
    margin-bottom: 21px;
    padding: 20px;
    background-color: #fff;
    border: 2px solid #797979;

    &:not(:nth-child(3n)){
        margin-right: 26px;
    }
`;
export const AllCourseCardImg = styled.img`
    width: 349px;
    height: 324px;
    margin-bottom: 10px;
`;

export const AllCourseCardBottomBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

export const AllCourseCardInfoBox = styled.div`
    margin-bottom: 11px;
`;

export const AllCourseCardTitleBox = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const AllCourseCardTitle = styled.h3`
    margin-top: 0;
    margin-right: 20px;
    margin-bottom: 0;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.35px;
    text-transform: uppercase;

    color: #0085ca;
`;

export const AllCourseCardNumber = styled.span`
    display: inline-block;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    letter-spacing: -0.35px;

    color: #0085ca;
`;

export const AllCourseCardDescBox = styled.div`
    max-width: 288px;
    width: 100%;
`;

export const AllCourseCardDesc = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.35px;
    color: #000;
`;

export const AllCourseCardLink = styled(Link)`
    display: block;
    margin-left: auto;
` 
export const AllCourseCardLinkImg = styled.img`
    width: 52px;
    height: 22px;
` 