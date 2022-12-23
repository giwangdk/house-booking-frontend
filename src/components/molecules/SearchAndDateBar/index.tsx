import moment from 'moment';
import React, { useContext, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { DateContext } from '../../../context/date-context';
import { Button } from '../../atoms';
import InputDate from '../InputDate';
import { SearchBarProps } from '../interface';
import Search from '../Search';
import style from './index.module.scss';

const SearchAndDateBar: React.FC<SearchBarProps> = ({
  handleSearch,
  value,
}): JSX.Element => {
  const { checkin_date, checkout_date, setCheckinDate, setCheckoutDate } =
    useContext(DateContext);

  const handleChangeStartDate = (date: Date) => {
    setCheckinDate(date);
  };
  const handleChangeEndDate = (date: Date) => {
    setCheckoutDate(date);
  };

  return (
    <div className={style.search__bar}>
      <Search handleSearch={handleSearch} value={value} />
      <div className={style.search__bar__input}>
        <InputDate
          label="Checkin Date"
          selected={checkin_date}
          onChange={handleChangeStartDate}
          selectsStart
          minDate={moment(Date.now()).toDate()}
          startDate={checkin_date}
          endDate={checkout_date}
        />
        <InputDate
          label="Checkout Date"
          selected={checkout_date}
          onChange={handleChangeEndDate}
          selectsEnd
          startDate={checkin_date}
          endDate={checkout_date}
          minDate={checkin_date}
        />
      </div>
      <Button border="pill" className={style.search__bar__button}>
        <AiOutlineSearch />
      </Button>
    </div>
  );
};

export default SearchAndDateBar;
