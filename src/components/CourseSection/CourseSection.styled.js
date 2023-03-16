import { Link } from "react-router-dom";
import styled from "styled-components";

export const CoruselSectionTag = styled.section`
    margin-bottom: 100px;
` 

export const CoruselContainer= styled.div`
    max-width: 1239px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
`;

export const CoruselTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 58px;
    font-family: 'NEXT ART';
    font-weight: 700;
    font-size: 48px;
    line-height: 54px;
    letter-spacing: -0.35px;
    text-transform: uppercase;
    text-align: center;
    color: #414141;
`;

export const CourselList = styled.ul`
    display: flex;
    align-items: stretch;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 30px;
    padding-left: 0;
    list-style: none;
`;

export const CourseLink = styled(Link)`
    display: block;
    max-width: 190px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 10px;
    font-family: 'NEXT ART';
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.35px;
    text-transform: capitalize;
    color: #fff;
    background-color: #0085ca;
    text-align: center;
    text-decoration: none;
`
