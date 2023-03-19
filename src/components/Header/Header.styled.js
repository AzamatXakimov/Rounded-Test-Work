import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "../../assets/images/search.svg";
import DetailArrow from "../../assets/images/details-arrow.svg";

export const HeaderTag = styled.header`
    padding-top: 6px;
    padding-bottom: 12px;
    background-color: #78d64a;
`;

export const HeaderContainer = styled.div`
    max-width: 1218px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
`;

export const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderLogoLink = styled(Link)`
    display: inline-block;
`;

export const HeaderLogoImg = styled.img`
    width: 166px;
    height: 63px;
`;

export const HeaderInnerBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 820px;
    width: 100%;
    margin-left: 20px;
`;

export const SearchButton = styled.button`
    display: inline-block;
    flex-shrink: 0;
    width: 26px;
    height: 26px;
    margin-right: 36px;
    background-image: url(${SearchIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const HeaderNav = styled.nav``;

export const HeaderNavList = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
`;

export const HeaderNavItem = styled.li`
    position: relative;
    &:not(:last-child){
        margin-right: 46px;
    }
`;



export const HedaerNavDetailList = styled.ul`
    position: absolute;
    top: 25px;
    z-index: 4;
    display: none;
    width: 226px;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 33px;
    padding-left: 0;
    list-style: none;

    &:hover{
        display: block;
    }
`;

export const HeaderNavLink = styled(NavLink)`
    font-family: 'NEXT ART';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 29px;
    letter-spacing: -0.35px;
    text-transform: uppercase;
    text-decoration: none;

    color: rgba(255, 255, 255, 0.9);

    &:hover ~ ${HedaerNavDetailList}{
        display: block;
    }

    &.active {
        color: #0085ca;
    }
`;
export const HedaerNavDetailItem = styled.li`
    background-color: #fff;
`;

export const HeaderNavDetail = styled.details`
    display: block;
`;

export const HeaderNavSummary = styled.summary`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 16px;
    font-family: 'NEXT ART';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 27px;
    letter-spacing: -0.35px;

    color: rgba(0, 0, 0, 0.9);
    list-style: none;
    border-bottom: 1px solid #000000;

    &::after{
        display: inline-block;
        width: 9px;
        height: 17px;
        background-image: url(${DetailArrow});
        background-position: center;
        transition: transform 0.3s ease;
        content: '';
        ${HeaderNavDetail}[open] &{
            transform: rotate(-90deg);
        }
    }

`;

export const HeadereLangSelect = styled.select`
    display: inline-block;
    max-width: 80px;
    width: 100%;
    margin-right: 36px;
    padding: 10px;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 15px;
    color: #fff;
    cursor: pointer;
`

export const HeadereLangOption = styled.option`
    color: #000;
`



export const HedaerNavSummaryList = styled.ul`;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 17px;
    padding-right: 22px;
    padding-left: 22px;
    padding-bottom: 40px;
    list-style: none;
    background-color: #fff;
    border-bottom: 1px solid #000000;
`
export const HedaerNavSummaryItem = styled.li`
    &:not(:last-child){
        margin-bottom: 24px;
    }
`

export const HedaerNavSummaryLink = styled(Link)`
    font-family: 'NEXT ART';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.35px;
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
`