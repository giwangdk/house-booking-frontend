import React, { useState } from 'react';
import style from './index.module.scss';
import { addDays } from 'date-fns';
import Calendar from '../Calendar';

const InputDate = (): JSX.Element => {
  return (
    <React.StrictMode>
      <div>
        <div className={style.input__date}>
          <label htmlFor="date">Date</label>
          <p className={style.placeholder}>Pick date</p>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default InputDate;
