import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AllCoursesSection = styled.section`
    margin-bottom: 70px;
`;
export const AllCoursesContainer = styled.section`
    max-width: 1265px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
`;

export const AllCoursesTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 58px;
    font-family: 'NEXT ART';
    font-weight: 700;
    font-size: 48px;
    line-height: 54px;
    letter-spacing: -0.35px;

    color: #414141;
`;

export const AllCoursesNavList = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 51px;
    padding-left: 0;
    list-style: none;
`;

export const AllCoursesNavItem = styled.li`
    &:not(:last-child){
        margin-right: 60px;
    }
`;

export const AllCoursesNavLink = styled(NavLink)`
    display: inline-block;
    padding-bottom: 16px;
    font-family: 'NEXT ART';
    font-weight: 700;
    font-size: 26px;
    line-height: 29px;
    letter-spacing: -0.35px;

    color: #414141;
    text-decoration: none;
    border-bottom: 3px solid transparent;

    &.active{
        border-bottom-color: #414141;
    }
`;
export const AllCoursesList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
`;