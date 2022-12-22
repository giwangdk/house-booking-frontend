import React from 'react';
import { SearchAndDateBar } from '../../molecules';
import style from './index.module.scss';

const SearchBar = (): JSX.Element => {
  return (
    <div className={style.search__navbar}>
      <SearchAndDateBar />
    </div>
  );
};

export default SearchBar;
