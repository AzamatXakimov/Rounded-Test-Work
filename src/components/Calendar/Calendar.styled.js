import styled from "styled-components";
import PrewArrow from "../../assets/images/calendar-prev-icon.svg";
import NextArrow from "../../assets/images/calendar-next-icon.svg";

export const CalendarWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 104px;
    padding-right: 20px;
    padding-bottom: 17px;
    padding-left: 20px;
    border: none;
    background-color: #0085ca;
`

export const CalendarInner = styled.div`
    max-width: 613px;
    width: 100%;
    & .rc-calendar{
        max-width: 613px;
        width: 100%;
        background-color: transparent;
        border: none;
        box-shadow: none;
    }
    & .rc-calendar-header{
        margin-bottom: 98px;
        border: none;

        & .rc-calendar-next-month-btn, .rc-calendar-prev-month-btn{
            &::after{
                display: inline-block;
                width: 18.43px;
                height: 33.41px;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                content: "";
            }
        }
        & .rc-calendar-prev-month-btn{
            &::after{
                background-image: url(${PrewArrow});
            }
        }
        & .rc-calendar-next-month-btn{
            &::after{
                background-image: url(${NextArrow});
            }
        }
    }
    & .rc-calendar-body{
        height: auto;
        padding: 0;
    }
    & .rc-calendar-month-select, .rc-calendar-year-select{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 42px;
        color: #fff;
    }
    & .rc-calendar-prev-year-btn, .rc-calendar-next-year-btn{
        display: none;
    }
    & thead th{
        padding-bottom: 85px;
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 26px;
        line-height: 30px;
        color: #fff;
        mix-blend-mode: normal;
        opacity: 0.6;
    }
    & tbody td{
        padding-bottom: 47px;
    }

    & .rc-calendar-date{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 81px;
        height: 74px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 29px;
        line-height: 34px;
        color: #ffff;
        border-radius: 50%;
        transition: background-color 0.3s ease;

        &:hover{
            background-color: rgba(120, 214, 74, 0.8);
        }
    }
    & .rc-calendar-selected-date .rc-calendar-date{
        background-color: rgba(120, 214, 74, 1);
    }
    & .rc-calendar-today .rc-calendar-date {
        border: 4px solid rgba(120, 214, 74, 1);
    }

    & .rc-calendar-last-month-cell, .rc-calendar-next-month-btn-day .rc-calendar-date{
        opacity: 0.5;
    }
    & .rc-calendar-selected-day .rc-calendar-date{
        background-color: transparent;
    }
`
