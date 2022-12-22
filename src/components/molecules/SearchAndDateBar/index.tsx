import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Button } from '../../atoms';
import InputDate from '../InputDate';
import Search from '../Search';
import style from './index.module.scss';
import Calendar from '../Calendar';
import { addDays } from 'date-fns';

const SearchAndDateBar = (): JSX.Element => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);
  const onChange = (ranges: any) => {
    setState([ranges.selection]);
    console.log(ranges.selection);
  };
  return (
    <React.StrictMode>
      <div className={style.search__bar}>
        <Search />
        <InputDate />
        <InputDate />
        <Button border="pill" className={style.search__bar__button}>
          <AiOutlineSearch />
        </Button>

        <Calendar onChange={onChange} state={state} />
      </div>
    </React.StrictMode>
  );
};

export default SearchAndDateBar;
