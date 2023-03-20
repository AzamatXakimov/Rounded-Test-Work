import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AdminNavBarInner = styled.div`
    max-width: 220px;
    width: 100%;
    background-color: #01384d;
`;

export const AdminNavBarList = styled.ul`
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
`;

export const AdminNavBarItem = styled.li`

`;
export const AdminNavBarLink = styled(NavLink)`
    display: inline-flex;
    align-items: center;
    width: 100%;
    padding-top: 25px;
    padding-right: 15px;
    padding-bottom: 25px;
    padding-left: 30px;
    
    font-size: 16px;
    line-height: 20px;
    color: #fff;
    background-color: transparent;
    text-decoration: none;
    transition: background-color 0.3s ease, padding 0.3s ease;

    &.active{
        padding-top: 15px;
        padding-bottom: 15px;
        background-color: #eabf9f;
    }

`
export const AdminNavBarLinkIconBox = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: 10px;
`