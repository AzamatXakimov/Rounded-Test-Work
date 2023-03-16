import { Link } from "react-router-dom";
import styled from "styled-components";
import PhoneIcon from "../../assets/images/phone-icon.svg";
import LocationIcon from "../../assets/images/location.svg";
import CopyrightIcon from "../../assets/images/copyright.svg";

export const FooterTag = styled.footer`
    padding-top: 66px;
    padding-bottom: 75px;
    background-color: #0085ca;
`;

export const FooterContainer = styled.div`
    max-width: 1186px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
`;

export const FooterTopBox = styled.div`
    margin-bottom: 97px;
`;

export const FooterLogoLink = styled(Link)`
    display: block;
    max-width: 224px;
    width: 100%;
    margin: 0 auto;
`;

export const FooterLogoImg = styled.img`
    display: inline-block;
    width: 224px;
    height: 87px;
`;

export const FooterInfoBox = styled.div`
    display: flex;
    align-items: start;
    margin-top: 106px;
`;

export const FooterLinkBox= styled.div`
    margin-right: 88px;

    &:nth-child(3){
        max-width: 350px;
        width: 100%;
        margin-right: 32px;
    }
    &:last-child{
        max-width: 384px;
        width: 100%;
        margin-right: 0;
    }
`;

export const FooterLinkTitle = styled.span`
    display: inline-block;
    margin-bottom: 16px;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.35px;

    color: rgba(255, 255, 255, 0.9);
`;
export const FooterLinkList = styled.ul`
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
`;

export const FooterLinkItem = styled.li`
    &:not(:last-child){
        margin-bottom: 17px;
    }
`;

export const FooterLink = styled(Link)`
    display: inline-block;
    font-family: 'NEXT ART';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 154%;
    letter-spacing: -0.35px;

    color: #fff;
    text-decoration: none;
`;

export const FooterPhoneLink = styled.a`
    display: inline-flex;
    align-items: center;
    margin-bottom: 16px;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.35px;

    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;

    &::before{
        display: inline-block;
        flex-shrink: 0;
        width: 16px;
        height: 15px;
        margin-right: 20px;
        background-image: url(${PhoneIcon});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        content: '';
    }
`;
export const FooterAdressLink = styled.a`
    display: inline-flex;
    align-items: center;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.35px;
    text-transform: uppercase;

    color: #fff;
    text-decoration: none;

    &::before{
        display: inline-block;
        flex-shrink: 0;
        width: 14px;
        height: 15px;
        margin-right: 20px;
        background-image: url(${LocationIcon});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        content: '';
    }
`;

export const FooterForm = styled.form`
    display: flex;
    margin-bottom: 20px;
    padding-top: 4px;
`;

export const FooterInput = styled.input`
    display: inline-block;
    max-width: 231px;
    width: 100%;
    padding: 18px 15px;
    border: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.35px;
    color: #414141;
`;

export const FooterBtn = styled.button`
    display: inline-block;
    padding: 18px 11px;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.35px;
    color: #e5f3fa;
    border: none;
    background-color: #78d64a;
    cursor: pointer;
`;

export const FooterNetWorkList = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 4px;
    padding-left: 0;
    list-style: none;
`;

export const FooterNetWorkItem = styled.li`
    &:not(:last-child){
        margin-right: 24px;
    }
`;

export const FooterNetWorkLink = styled.a``;

export const FooterNetWorkImg = styled.img``;

export const FooterBottomBox = styled.div`
    padding-top: 51px;
    border-top: 1px solid #fff;
`;

export const FooterBottomText = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'NEXT ART';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #fff;

    &::before{
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-right: 6px;
        background-image: url(${CopyrightIcon});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        content: '';
    }
`