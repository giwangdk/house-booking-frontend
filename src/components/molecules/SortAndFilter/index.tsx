import moment from 'moment';
import React, { useContext, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useQuery } from 'react-query';
import { DateContext } from '../../../context/date-context';
import { ICityResponse } from '../../../helpers/types';
import { getCities } from '../../../services/service';
import { Button } from '../../atoms';
import Dropdown from '../Dropdown';
import InputDate from '../InputDate';
import { SearchBarProps, SortAndFilterBarProps } from '../interface';
import Search from '../Search';
import style from './index.module.scss';

const SortAndFilter: React.FC<SortAndFilterBarProps> = ({
  handleSort,
  handleSortBy,
  valueSort,
  valueSortBy,
}): JSX.Element => {
  const optionsSortBy = [
    {
      value: 'name',
      label: 'Name',
    },
    {
      value: 'price',
      label: 'Price',
    },
    {
      value: 'city',
      label: 'City',
    },
  ];

  const optionsSort = [
    {
      value: 'asc',
      label: 'ASC',
    },
    {
      value: 'desc',
      label: 'DESC',
    },
  ];

  return (
    <div className={style.bar}>
      <Dropdown
        values={optionsSort as any}
        value={valueSort}
        onChange={handleSort}
      />
      <Dropdown
        values={optionsSortBy as any}
        value={valueSortBy}
        onChange={handleSortBy}
      />
    </div>
  );
};

export default SortAndFilter;
