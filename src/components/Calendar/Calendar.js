import 'rc-calendar/assets/index.css';
import React from 'react';
import Calendar from 'rc-calendar';

import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';
import { CalendarInner, CalendarWrapper } from './Calendar.styled';



export const CustomCalendar = ({setDate, setCalendar}) => {
    const Month = {
        uz: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
        ru: ["Январь", "Февраль", "Март", "Апрел", "Май", "Июнь", "Июль", "Август", "Сентябр", "Октябрь", "Ноябрь", "Декабрь"],
        en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",  "December"],
    }

    return <>
        <CalendarWrapper>
            <CalendarInner>
                <Calendar showOk={true} showDateInput={false} showToday={false} onSelect={(date) => {
                    setCalendar(false);
                    setDate(`${Month["ru"][date["_d"].getMonth()]}, ${date["_d"].getFullYear()}`);
                }} />
            </CalendarInner>
        </CalendarWrapper>
    </>
}
