import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { CalendarProps } from '../interface';
import style from './index.module.scss';

const Calendar: React.FC<CalendarProps> = ({ onChange, state }) => {
  return (
    <DateRange
      editableDateInputs={true}
      onChange={onChange}
      moveRangeOnFirstSelection={false}
      ranges={state}
      className={style.calendar}
      rangeColors={['#FF5F6D', '#d46e6e', '#ffd1d1']}
      color={'#FF5F6D'}
    />
  );
};

export default Calendar;
