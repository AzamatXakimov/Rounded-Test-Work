import { Link } from "react-router-dom";
import styled from "styled-components";

export const AdminHeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    background-color: #01384d;
`;

export const AdminHeaderLogoBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 219px;
    width: 100%;
    padding-top: 19px;
    padding-bottom: 20px;
    /* box-shadow: 0px 0px 0px 1px #022837; */
    border-right: 2px solid #022837;
    border-bottom: 2px solid #022837;
`
export const AdminHeaderLogoLink = styled(Link)`
    color: #fff;
    text-decoration: none;
`;

export const AdminHeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 60px;
    padding-left: 15px;
`;

export const AdminHeaderForm = styled.form`
    max-width: 400px;
    width: 100%;
`;

export const AdminHeaderLabel = styled.label`
    position: relative;
    display: block;
    &::after {
        position: absolute;
        top: 10px;
        right: 22px;
        z-index: 2;
        display: inline-block;
        width: 22px;
        height: 22px;
        background-position: center;
        background-repeat: no-repeat;
        content: "";
    }
`;

export const AdminHeaderInput = styled.input`
    display: inline-block;
    width: 100%;
    padding-top: 12px;
    padding-right: 20px;
    padding-bottom: 12px;
    padding-left: 20px;

    font-size: 13px;
    line-height: 16px;
    color: rgba(0,0,0,1);

    background-color: #fff;
    border-radius: 7px;
    border: none;

    &::placeholder{
        font-size: 13px;
        line-height: 16px;
        color: rgba(0,0,0,0.5);
    }
`;

export const AdminHeaderButton = styled.button`
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #fff;
    background-color: transparent;
    border: none;
    cursor: pointer;
`
export const AdminHeaderProfileBox = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    margin-right: 10px;
    background-color: #fff;
    border-radius: 50%;
`