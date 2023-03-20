import styled from "styled-components";

export const LoginWrapper = styled.div`
    width: 35%;
    margin: 150px auto;
    padding: 20px;
    border-radius: 25px;
    background-color: #78d64a;
`

export const LoginTitle = styled.h2`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 44px;
    line-height: 50px;
    letter-spacing: -0.35px;
    color: #fff;
    text-align: center;
`

export const LoginForm = styled.form`
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
`

export const LoginInput = styled.input`
    display: inline-block;
    max-width: 400px;
    width: 100%;
    margin-bottom: 25px;
    padding: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.35px;
    color: #fff;
    border: 2px solid rgba(255, 255, 255, 0.9);
    border-radius: 6px;
    background-color: transparent;

    &::placeholder{
        color: #fff;
    }
`;

export const LoginBtn = styled.button`
    display: inline-block;
    padding: 15px 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 27px;
    letter-spacing: -0.35px;
    color: rgba(255, 255, 255, 0.9);

    background: #0085ca;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`