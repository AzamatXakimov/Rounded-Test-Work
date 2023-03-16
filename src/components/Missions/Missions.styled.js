import styled from "styled-components";

export const MissionsSection = styled.section`
    margin-bottom: 56px;
`

export const MissionsContainer = styled.div`
    max-width: 1256px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
`

export const MissionsInner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const MissionsTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 30px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 59px;
    text-align: center;
    letter-spacing: -0.35px;
    text-transform: uppercase;

    color: #414141;
`;

export const MissionsImg = styled.img`
    &:nth-child(1){
        width: 804px;
        margin-right: 20px;
        margin-bottom: 20px;
    }
    &:nth-child(2){
        width: 392px;
        margin-bottom: 20px;
    }
    &:nth-child(3){
        width: 677px;
        margin-right: 20px;
    }
    &:nth-child(4){
        width: 519px;
    }
`;

export const MissionsFirstdInfoBox = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    max-width: 680px;
    width: 100%;
    padding: 30px 23px;
    background-color: #0085ca;
`;

export const MissionsSecondInfoBox = styled.div`
    position: absolute;
    top: calc(50% - 160px);
    left: 0;
    max-width: 677px;
    width: 100%;
    padding-top: 51px;
    padding-right: 22px;
    padding-bottom: 69px;
    padding-left: 23px;
    background-color: #d22630;
`;

export const MissionsDesc = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 16.5px;
    line-height: 180%;
    letter-spacing: -0.35px;
    text-transform: uppercase;

    color: #fff;
`;