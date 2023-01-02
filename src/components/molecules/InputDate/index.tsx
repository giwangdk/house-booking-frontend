import React, { useState } from 'react';
import style from './index.module.scss';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { InputDateProps } from '../interface';

const InputDate: React.FC<InputDateProps> = (props): JSX.Element => {
  return (
    <div className={style.input__date}>
      <p>{props.label}</p>
      <DatePicker
        className={style.input__date__input}
        selected={props.selected}
        onChange={props.onChange}
        selectsStart={props.selectsStart}
        startDate={props.startDate}
        endDate={props.endDate}
        selectsEnd={props.selectsEnd}
        minDate={props.minDate}
        readOnly={props.readOnly}
      />
    </div>
  );
};

export default InputDate;
