import React from 'react';
import Dropdown from '../Dropdown';
import { SortAndFilterBarProps } from '../interface';
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
