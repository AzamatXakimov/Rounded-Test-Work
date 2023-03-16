import styled from "styled-components";

export const SingleCourseTypeSection = styled.section`
    margin-bottom: 100px;
`
export const SingleCourseTypeContainer = styled.div`
    max-width: 1102px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
`
export const SingleCourseTypeTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 30px;
    font-family: 'NEXT ART';
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 50px;
    letter-spacing: -0.35px;
    color: #414141;
    text-align: center;
`;

export const SingleCourseTypeList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
`

export const SingleCourseTypeItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 521px;
    width: 100%;
    margin-right: 18px;
    margin-bottom: 18px;
    padding: 10px;
    background-color: #0085ca;

    &:nth-child(2){
        margin-right: 0;
        background-color: #78d64a;
    }

    &:nth-child(3){
        margin-bottom: 0;
        background-color: #d22630;
    }

    &:nth-child(4){
        margin-right: 0;
        margin-bottom: 0;
    }
`;

export const SingleCourseTypeImg = styled.img`
    width:186px;
    height: 199px;
    margin-right: 10px;
`

export const SingleCourseTypeDesc = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'NEXT ART';
    font-weight: 400;
    font-size: 24px;
    line-height: 140.33%;
    letter-spacing: -0.35px;

    color: #fff;
`