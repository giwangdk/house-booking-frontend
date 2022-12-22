import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Button } from '../../atoms';
import InputDate from '../InputDate';
import Search from '../Search';
import style from './index.module.scss';

const SearchAndDateBar = (): JSX.Element => {
  const [startDate, setStartDate] = useState(new Date('2014/02/08'));
  const [endDate, setEndDate] = useState(new Date('2014/02/10'));

  const handleChangeStartDate = (date: Date) => {
    setStartDate(date);
  };
  const handleChangeEndDate = (date: Date) => {
    setEndDate(date);
  };

  return (
    <div className={style.search__bar}>
      <Search />
      <div className={style.search__bar__input}>
        <InputDate
          label="Checkin Date"
          selected={startDate}
          onChange={handleChangeStartDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <InputDate
          label="Checkout Date"
          selected={endDate}
          onChange={handleChangeEndDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </div>
      <Button border="pill" className={style.search__bar__button}>
        <AiOutlineSearch />
      </Button>
    </div>
  );
};

export default SearchAndDateBar;
