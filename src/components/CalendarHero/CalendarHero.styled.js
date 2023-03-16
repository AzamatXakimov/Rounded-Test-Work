import styled from "styled-components";
import FilterIcon from "../../assets/images/filter.svg"
import ArrowToLeft from "../../assets/images/calendar-arrow-to-left.svg"
import ArrowToRight from "../../assets/images/calendar-arrow-to-right.svg"
import CloseIcon from "../../assets/images/Close.svg"
import CheckedIcon from "../../assets/images/check.svg"

export const CalendarHeroSection = styled.section`
    position: relative;
    padding-top: 100px;
    margin-bottom: 100px;
`;

export const CalendarHeroContainer = styled.div`
    max-width: 1106px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
`;

export const CalendarHeroTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 48px;
    font-family: 'NEXT ART';
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 50px;
    letter-spacing: -0.35px;
    color: #414141;
    text-align: center;
`;

export const CalendarHeroTopBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 80px;
`;

export const CalendarHeroFiltreButton = styled.button`
    display: inline-flex;
    align-items: center;
    margin-right: 25px;
    font-family: 'NEXT ART';
    font-weight: 700;
    font-size: 24px;
    line-height: 27px;
    letter-spacing: -0.35px;

    color: #414141;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &::before{
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-right: 19px;
        background-image: url(${FilterIcon});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        content: '';
    }
`;

export const CalendarHeroDateBox = styled.div`
    display: flex;
    align-items: center;
`;

export const CalendarHeroDatePrevBtn = styled.button`
    display: inline-block;
    width: 10px;
    height: 14px;
    background-image: url(${ArrowToLeft});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

export const CalendarHeroDateText = styled.span`
    display: inline-block;
    margin-right: 23px;
    margin-left: 23px;
    font-family: 'NEXT ART';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 27px;
    letter-spacing: -0.35px;

    color: #000;
`

export const CalendarHeroDateNextBtn = styled.button`
    display: inline-block;
    width: 10px;
    height: 14px;
    background-image: url(${ArrowToRight});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const CalendarHerpList = styled.ul`
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
`

export const CalendarHerpItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:not(:last-child){
        margin-bottom: 40px;
    }
`

export const CalendarHeroItemDateBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 182px;
    width: 100%;
    padding: 10px;
    background-color: #0085ca;

    .red &{
        background-color: #d22630;
    }
`

export const CalendarHeroItemDateText = styled.strong`
    display: inline-block;
    font-family: 'NEXT ART';
    font-size: 64px;
    line-height: 75px;
    letter-spacing: -0.35px;
    color: #fff;
`

export const CalendarHeroItemDateDay = styled.span`
    display: inline-block;
    font-family: 'NEXT ART';
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.35px;

    color: #fff;
`;

export const CalendarHeroItemBox = styled.div`
    display: flex;
    align-items: center;
    &::before{
        display: inline-block;
        width: 7px;
        height: 89px;
        margin-right: 28px;
        background-color: #0085ca;
        content: '';
        .red &{
            background-color: #d22630;
        }
    }
`;

export const CalendarHeroItemBoxInner = styled.div``;

export const CalendarHeroItemTime = styled.strong`
    display: block;
    margin-bottom: 12px;
    font-family: 'NEXT ART';
    font-weight: 700;
    font-size: 24px;
    line-height: 27px;
    letter-spacing: -0.35px;

    color: #414141;
`

export const CalendarHeroItemDesc = styled.span`
    display: block;
    margin-bottom: 12px;
    font-family: 'NEXT ART';
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.35px;

    color: #414141;
`

export const CalendarHeroItemText = styled.span`
    display: block;
    font-family: 'NEXT ART';
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.35px;

    color: #414141;
`

export const CalenderHeroFilterModal = styled.div`
    position: absolute;
    top: 0;
    /* left: calc(50% - 620px);    */
    left: 0;   
    display: none; 
    max-width: 415px;
    width: 100%;
    height: 100%;
    padding: 74px 25px;
    background-color: #78d64a;

    &.show{
        display: block;
    }
`;

export const CalenderHeroFilterModalCloseBtn = styled.button`
    position: absolute;
    top: 14px;
    right: 17px;
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


export const CalenderHeroFilterForm = styled.form`
    max-width: 243px;
    width: 100%;
    margin: 0 auto;
`

export const CalenderHeroFilterLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 32px;
`

export const CalenderHeroFilterCheckBox = styled.input``

export const CalenderHeroFilterCheckBoxBox = styled.span`
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 2px solid rgba(255, 255, 255, 0.9);
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    ${CalenderHeroFilterCheckBox}:checked ~ &{
        background-color: #0085ca;
        border-color: transparent;
        background-image: url(${CheckedIcon});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }
`
export const CalenderHeroFilterCheckBoxText = styled.span`
    display: inline-block;
    font-family: 'NEXT ART';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 27px;
    letter-spacing: -0.35px;

    color: rgba(255, 255, 255, 0.9);
`;


export const CalenderHeroFilterInputLabel = styled.span`
    display: block;
    margin-top: 32px;
    margin-bottom: 32px;
`

export const CalenderHeroFilterText = styled.span`
    display: inline-block;
    font-family: 'NEXT ART';
    font-weight: 600;
    font-size: 24px;
    line-height: 27px;
    letter-spacing: -0.35px;
    color: #414141;
`

export const CalenderHeroFilterInput = styled.input`
    display: inline-block;
    width: 100%;
    margin-top: 32px;
    padding: 10px;

    font-family: 'NEXT ART';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.35px;
    color: #414141;
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.9);
    border-radius: 6px;

    &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
    }
`;

export const CalenderHeroFilterFromBtn = styled.button`
    display: inline-block;
    max-width: 146px;
    width: 100%;
    padding: 19px;
    font-family: 'NEXT ART';
    font-weight: 600;
    font-size: 24px;
    line-height: 27px;
    letter-spacing: -0.35px;

    color: rgba(255, 255, 255, 0.9);

    background-color: #0085ca;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`