import styled from "styled-components";
import CloseIcon from "../../assets/images/Close.svg"

export const BuyModalTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 69px;
`;

export const BuyModalTopTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'NEXT ART';
    font-weight: 700;
    font-size: 44px;
    line-height: 50px;
    letter-spacing: -0.35px;
    color: #000;
`;

export const BuyModalCloseBtn = styled.button`
    display: inline-block;
    width: 32px;
    height: 32px;
    background-color: transparent;
    border: none;
    background-image: url(${CloseIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
`;

export const BuyModalForm = styled.form`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const BuyModalFormBox = styled.div`
    padding-right: 83px;
    max-width: 541px;
    width: 100%;
    &:first-child{
        max-width: 392px;
        padding-right: 0px;
        margin-right: 25px;
    }
`;

export const BuyModalPersonInput = styled.input`
    display: block;
    width: 100%;
    padding: 10px 5px;
    background-color: #fff;
    border: none;
    border-bottom: 1px solid #797979;
    font-family: 'NEXT ART';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 25px;
    letter-spacing: -0.35px;
    color: #000;

    &::placeholder{
        color: #797979;
    }

    &:not(:last-child){
        margin-bottom: 70px;
    }
`;


export const BuyModalCheckBoxLabel = styled.label`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 307px;
    width: 100%;
    font-family: 'NEXT ART';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: -0.35px;
    color: #d22630;
`
export const BuyModalCheckBox = styled.input`
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 16px;
    cursor: pointer;
`;

export const BuyModalCheckBoxLabelText = styled.span`
`

export const BuyModalCheckBoxLabelTextGrey = styled.span`
    color: #797979;
`

export const BuyModalBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 458px;
    width: 100%;

    &:not(:last-child){
        margin-bottom: 35px;
    }
`;

export const BuyModalText = styled.span`
    display: inline-block;
    font-family: 'NEXT ART';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: -0.35px;
    color: #797979;
`;

export const BuyModalCountBox = styled.div`
    display: flex;
    align-items: center;
`;

export const BuyModalCountBtn = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 62px;
    font-family: 'NEXT ART';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 140%;
    letter-spacing: -0.35px;
    color: #797979;

    background-color: transparent;
    border: 2px solid #797979;
    border-radius: 10px;
    cursor: pointer;

    &:first-child{
        margin-right: 37px;
    }
    &:last-child{
        margin-left: 37px;
    }
`;

export const BuyModalCardInput = styled.input`
    display: block;
    width: 100%;
    font-family: 'NEXT ART';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 25px;
    letter-spacing: -0.35px;
    color: #797979;
    padding: 19px 24px;
    background-color: #fff;
    border: 2px solid #797979;
    border-radius: 10px;

    &::placeholder{
        font-weight: 600;
    }
`

export const BuyModalCardMiniInput = styled.input`
    display: block;
    width: 100%;
    font-family: 'NEXT ART';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 25px;
    letter-spacing: -0.35px;
    color: #797979;
    padding: 19px 24px;
    background-color: #fff;
    border: 2px solid #797979;
    border-radius: 10px;

    &::placeholder{
        font-weight: 600;
    }

    &:first-child{
        width: 246px;
        margin-right: 16px;
    }
`;

export const BuyModalBtn = styled.button`
    display: block;
    max-width: 201px;
    width: 100%;
    margin-left: auto;
    padding: 19px;

    font-family: 'NEXT ART';
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: -0.35px;
    color: rgba(255, 255, 255, 0.9);
    background-color: #0085ca;
    border-radius: 10px;
    text-align: center;
    border: none;
    cursor: pointer;
`